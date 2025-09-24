// https://disneyplus-ai-azure-function.azurewebsites.net/api/disneyplusaisuggest
import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  baseURL: `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}`,
  defaultHeaders: {
    "api-key": process.env.AZURE_OPENAI_API_KEY!,
    "x-ms-version": process.env.AZURE_OPENAI_API_VERSION ?? "2024-10-21",
  },
});

export async function DisneyPlusAISuggest(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const term = request.query.get("term") ?? "";

  try {
    const completion = await client.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT!, // deployment name
      max_tokens: 128,
      messages: [
        {
          role: "system",
          content:
            "You are a digital video assistant. After a playful one-line intro, list at least 3 movie titles. Keep it concise.",
        },
        { role: "user", content: `I like: ${term}` },
      ],
    });

    context.log("Raw completion:", JSON.stringify(completion, null, 2));

    const message =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I couldn’t come up with suggestions right now.";

    return {
      status: 200,
      jsonBody: { message },
    };
  } catch (error: any) {
    context.error("Error from AzureOpenAI:", error);
    return {
      status: error?.status ?? 500,
      jsonBody: { message: error.message ?? "Unknown error" },
    };
  }
}

app.http("DisneyPlusAISuggest", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: DisneyPlusAISuggest,
});
