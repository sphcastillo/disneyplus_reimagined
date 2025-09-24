import MoviesCarousel from "@/components/MoviesCarousel";
import OpenAIAzureSuggestion from "@/components/OpenAIAzureSuggestion";
import { getDiscoverMovies } from "@/lib/getMovies";
import { ramabhadra } from "@/utils/fonts/fonts";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ genre?: string }>;
  };
  

async function GenrePage({ params, searchParams }: Props) {
    const { id } = await params;
    const { genre = "" } = await searchParams;
    
    const movies = await getDiscoverMovies(id);

    return (
        <div className='max-w-7xl mx-auto bg-[#17171B]'>
            <div className={`${ramabhadra.className} pt-8`}>
                <div className="pt-[85px] pb-8 sm:pb-16">
                    <OpenAIAzureSuggestion term={genre}/>
                </div>
                <div className='h-[1px] bg-white/10'/>
                <div className="flex flex-col space-y-5 pt-4 sm:pt-8">
                        <h1 className="text-2xl sm:text-3xl font-bold px-10 text-white">Results from {genre}</h1>

                    <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
                </div>
            </div>
        </div>
    )
}

export default GenrePage;