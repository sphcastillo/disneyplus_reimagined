import OpenAI from "openai";
import Hamm from "@/public/images/Hamm.png";
import Image from "next/image";

type Props = { term: string };

type SuggestionResponse = {
  intro: string;
  titles: string[];
};

export default async function AISearchSuggestion({ term }: Props) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY");

  const client = new OpenAI({ apiKey });

  const result = await client.responses.create({
    model: "gpt-4.1-mini",
    max_output_tokens: 220,
    temperature: 0.7,
    input: [
      {
        role: "system",
        content:
          "You are a digital video assistant. Return ONLY valid minified JSON with keys 'intro' (a playful one-line intro, <=12 words) and 'titles' (an array of 3–5 concise movie titles). No extra text.",
      },
      { role: "user", content: `I like: ${term}` },
    ],
  });

  let parsed: SuggestionResponse | null = null;
  try {
    parsed = JSON.parse(result.output_text ?? "");
  } catch {
    console.error("Error parsing JSON from OpenAI:", result.output_text);
  }

  const intro = parsed?.intro ?? "Here are some picks you might enjoy:";
  const titles = parsed?.titles?.length
    ? parsed.titles
    : ["The Princess Bride", "Stardust", "Pan's Labyrinth"];

  return (
    <div className="p-4 sm:p-6 sm:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/50 via-slate-900/80 to-yellow-950/40 shadow-xl shadow-amber-900/25 ring-1 ring-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)]" aria-hidden />
        <div className="relative p-5 sm:p-6">
          <div className="flex items-center gap-2 flex-wrap rounded-lg bg-amber-500/10 px-4 py-2.5 w-fit border border-amber-400/25">
            <Image
              src={Hamm}
              alt="Hamm"
              className="h-8 w-auto flex-shrink-0 sm:h-10"
              priority
            />
            <span className="text-lg font-semibold text-amber-200 sm:text-xl">Hamm</span>
            <span className="text-lg font-semibold text-amber-200 sm:text-xl">AI Assistant Suggests:</span>
          </div>
          <div className={`pt-4 sm:pt-5`}>
            <p className="italic text-lg sm:text-xl text-white/95 leading-relaxed">“{intro}”</p>
            <ul className="mt-3 list-disc list-inside text-white/90 space-y-1">
              {titles.map((title, index) => (
                <li key={index} className="text-lg sm:text-xl">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
