import { AzureOpenAI } from "openai";
import { hubballi } from "@/utils/fonts/fonts";

type Props = { term: string };

type SuggestionResponse = {
  intro: string;
  titles: string[];
};

export default async function AISuggestion({ term }: Props) {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
  const apiKey = process.env.AZURE_OPENAI_API_KEY!;
  const apiVersion =
    process.env.AZURE_OPENAI_API_VERSION ?? "2025-01-01-preview";
  const deployment =
    process.env.AZURE_OPENAI_DEPLOYMENT ?? "DisneyPlusAzureOpenAI";

  if (!endpoint) throw new Error("Missing AZURE_OPENAI_ENDPOINT");
  if (!apiKey) throw new Error("Missing AZURE_OPENAI_API_KEY");

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  const result = await client.chat.completions.create({
    model: deployment,
    max_tokens: 200,
    temperature: 0.7,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are a digital video assistant. Return ONLY valid minified JSON with keys 'intro' (a playful one-line intro, <=12 words) and 'titles' (an array of 3–5 concise movie titles). No extra text.",
      },
      { role: "user", content: `I like: ${term}` },
      {
        role: "assistant",
        content: `{"intro":"Got it—queue these up!","titles":["Example 1","Example 2","Example 3"]}`,
      },
    ],
  });

  let parsed: SuggestionResponse | null = null;
  try {
    parsed = JSON.parse(result.choices?.[0]?.message?.content ?? "");
  } catch {
    console.error("Error parsing JSON");
  }

  const intro = parsed?.intro ?? "Here are some picks you might enjoy:";
  const titles = parsed?.titles?.length
    ? parsed.titles
    : ["The Princess Bride", "Stardust", "Pan's Labyrinth"];

  return (
    <div>
      <div className="px-2 sm:px-10 flex">
        <div className="hidden sm:block animate-pulse rounded-full bg-gradient-to-t from-white to-purple-700 h-10 w-10 border-2 flex-shrink-0 border-white" />
        <div className="flex items-center">
          <p className="text-md sm:text-lg text-yellow-300 pl-4">
            AI Assistant Suggests:{" "}
          </p>
        </div>
      </div>
      <div className={`${hubballi.className} pt-3 pl-6 sm:pl-12`}>
        <p className="italic text-lg sm:text-xl text-white">“{intro}”</p>
        <ul className="mt-1 list-disc list-inside text-white/90">
          {titles.map((title, index) => (
            <li key={index} className="text-lg sm:text-xl">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
