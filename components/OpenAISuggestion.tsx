import { OpenAI } from "openai";
import Image from "next/image";
import Lumiere from "@/public/images/Lumiere.png";

type Props = { term: string };

export default async function OpenAISuggestion({ term }: Props) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY");

  const client = new OpenAI({ apiKey, });

  const result = await client.responses.create({
    model: "gpt-4.1-mini",
    max_output_tokens: 128,
    input: [
      {
        role: "system",
        content:
          "You are a digital video assistant for Netflix, Disney Plus & Amazon Prime Video. Give a quirky, short suggestion of what to watch next. After a brief intro, list at least 3 film titles. If the user mentions a genre, bias toward it.",
      },
      { role: "user", content: `I like: ${term}` },
    ],
  });

  const rawContent =
    result.output_text?.trim() ??
    "I couldn't think of recommendations right now.";

  const lines = rawContent
    .split(/\n+/)
    .map((line) => line.replace(/^[\d]+[.)]\s*|^[-•*]\s*/i, "").trim())
    .filter(Boolean);
  const intro = lines.length > 1 ? lines[0] : null;
  const listItems = lines.length > 1 ? lines.slice(1) : lines;

  return (
    <div className="p-6 xs:p-10 pb-0">
      <div className="relative overflow-hidden rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-950/60 via-slate-900/80 to-indigo-950/50 shadow-xl shadow-purple-900/20 ring-1 ring-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(192,132,252,0.15),transparent)]" aria-hidden />
        <div className="relative p-6 sm:p-8">
          <div className="flex items-center gap-2 flex-wrap rounded-lg bg-purple-500/10 px-4 py-2.5 w-fit border border-purple-400/20">
            <span className="text-lg font-semibold text-purple-300 sm:text-xl">Lumière</span>
            <Image
              src={Lumiere}
              alt="Lumière"
              className="h-9 w-auto flex-shrink-0 sm:h-10"
              priority
            />
            <span className="text-lg font-semibold text-purple-300 sm:text-xl">AI Assistant Suggests:</span>
          </div>
          <div className={`pt-4 sm:pt-5`}>
            {intro && (
              <p className="italic text-md sm:text-lg lg:text-xl text-white/95 mb-3 leading-relaxed">
                {intro}
              </p>
            )}
            {listItems.length > 1 && (
              <ul className="list-disc list-inside text-md sm:text-lg lg:text-xl text-white space-y-1.5 text-white/95">
                {listItems.slice(0, -1).map((item, i) => (
                  <li key={i} className="italic text-pretty">{item}</li>
                ))}
              </ul>
            )}
            {listItems.length >= 1 && (
              <p className="italic text-md sm:text-lg lg:text-xl text-white text-pretty mt-2 text-white/95">
                {listItems[listItems.length - 1]}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}