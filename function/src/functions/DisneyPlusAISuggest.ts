// https://disneyplus-ai-azure-function.azurewebsites.net/api/disneyplusaisuggest
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AZURE_API_KEY!,
  // Point the OpenAI client to your Azure resource/deployment
  baseURL: `${process.env.ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}`,
  defaultHeaders: {
    "api-key": process.env.AZURE_API_KEY!,
    "x-ms-version": process.env.AZURE_OPENAI_API_VERSION ?? "2024-10-21",
  },
});

async function backoff<T>(fn: () => Promise<T>, tries = 4) {
  let delay = 400;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); }
    catch (e: any) {
      const status = e?.status ?? e?.response?.status;
      if (status === 429 || status === 503) { // throttle/busy
        await new Promise(r => setTimeout(r, delay));
        delay *= 2;
        continue;
      }
      throw e;
    }
  }
  throw new Error("rate_limited");
}

export async function DisneyPlusAISuggest(req: HttpRequest, ctx: InvocationContext): Promise<HttpResponseInit> {
  ctx.log(`HTTP ${req.method} ${req.url}`);

  const term = (req.query.get("term") || "").trim();
  if (!term) {
    return { status: 400, jsonBody: { message: "Missing 'term' query param" } };
  }

  try {
    const result = await backoff(() =>
      client.chat.completions.create({
        // IMPORTANT: Azure expects the *deployment name* for `model`
        model: process.env.AZURE_OPENAI_DEPLOYMENT!,
        max_tokens: 64, // keep small to stay under TPM
        messages: [
          {
            role: "system",
            content:
              "You are a digital video assistant. Short playful intro + at least 3 film titles relevant to the user's taste/genre.",
          },
          { role: "user", content: `I like: ${term}` },
        ],
      })
    );

    const message = result.choices?.[0]?.message?.content ?? "No suggestion this time.";
    return { status: 200, jsonBody: { message }, headers: { "Cache-Control": "no-store" } };
  } catch (err: any) {
    const status = err?.status ?? err?.response?.status ?? 500;
    if (status === 429) {
      return { status: 429, jsonBody: { code: "rate_limited", message: "We’re a bit busy—try again shortly." } };
    }
    ctx.error(err);
    return { status, jsonBody: { message: err?.message ?? "Server error" } };
  }
}

app.http("DisneyPlusAISuggest", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: DisneyPlusAISuggest,
});
