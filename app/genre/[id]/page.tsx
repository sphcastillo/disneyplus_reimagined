import MoviesGrid from "@/components/MoviesGrid";
import OpenAISuggestion from "@/components/OpenAISuggestion";
import { getDiscoverMovies } from "@/lib/getMovies";
import { ramabhadra, quattrocentoSans } from "@/utils/fonts/fonts";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ genre?: string }>;
};


async function GenrePage({ params, searchParams }: Props) {
    const { id } = await params;
    const { genre = "" } = await searchParams;

    const movies = await getDiscoverMovies(id);

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#17171B] via-[#1a1625] to-[#0f0a1a] -z-10" />
            
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.08),transparent_50%)] -z-10" aria-hidden />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(168,85,247,0.06),transparent_50%)] -z-10" aria-hidden />

            <div 
                className="fixed inset-0 opacity-[0.015] -z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
                aria-hidden
            />
            
            <div className='max-w-7xl mx-auto relative z-0'>
                <div className={`${ramabhadra.className} pt-8`}>
                    <div className="pt-[85px] pb-8 sm:pb-16">
                        <OpenAISuggestion term={genre} />
                    </div>
                    
                    <div className="relative px-5 lg:px-10">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent blur-sm" aria-hidden />
                    </div>
                    
                    <div className="flex flex-col space-y-5 pt-4 sm:pt-8">
                        <div className={`${quattrocentoSans.className} px-5 lg:px-10 pt-2 pb-4`}>
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl drop-shadow-sm">
                                Genre: {genre}
                            </h2>
                            <div className="mt-2 h-0.5 w-96 rounded-full bg-gradient-to-r from-amber-400/80 via-purple-400/80 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                        </div>

                        <MoviesGrid title="Genre" movies={movies} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenrePage;