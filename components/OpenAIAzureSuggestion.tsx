import { AzureOpenAI } from "openai";
import { hubballi } from "@/utils/fonts/fonts";

type Props = { term: string };

export default async function OpenAIAzureSuggestion({ term }: Props) {
  const endpoint   = process.env.AZURE_OPENAI_ENDPOINT!;
  const apiKey     = process.env.AZURE_OPENAI_API_KEY!;
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION ?? "2025-01-01-preview";
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT ?? "DisneyPlusAzureOpenAI";

  if (!endpoint) throw new Error("Missing AZURE_OPENAI_ENDPOINT");
  if (!apiKey) throw new Error("Missing AZURE_OPENAI_API_KEY");

  const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment, 
  });

  const result = await client.chat.completions.create({
    model: deployment,          
    max_tokens: 128,
    messages: [
      {
        role: "system",
        content:
          "You are a digital video assistant for Netflix, Disney Plus & Amazon Prime Video. Give a quirky, short suggestion of what to watch next. After a brief intro, list at least 3 film titles. If the user mentions a genre, bias toward it.",
      },
      { role: "user", content: `I like: ${term}` },
    ],
  });

  const content =
    result.choices?.[0]?.message?.content ??
    "I couldn't think of recommendations right now.";

  return (
    <div className="flex space-x-5 p-10 pb-0">
      <div className="animate-pulse rounded-full bg-gradient-to-t from-purple-400 h-10 w-10 border-2 flex-shrink-0 border-white" />
      <div>
        <p className="text-sm text-purple-400">Azure OpenAI Assistant Suggests: </p>
        <div className={`${hubballi.className} pt-2 sm:pt-4`}>
          <p className="italic text-md sm:text-lg lg:text-xl text-white">{content}</p>
        </div>
      </div>
    </div>
  );
}