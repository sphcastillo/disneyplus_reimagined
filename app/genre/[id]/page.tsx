import MoviesCarousel from "@/components/MoviesCarousel";
import OpenAIAzureSuggestion from "@/components/OpenAIAzureSuggestion";
import { getDiscoverMovies } from "@/lib/getMovies";
import { Ramabhadra } from 'next/font/google';


const ramabhadra = Ramabhadra({ weight: "400", subsets: ['latin'] });

type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    };
}

async function GenrePage({ params: { id }, searchParams: { genre }}: Props) {
    
    const movies = await getDiscoverMovies(id);

    return (
        <div className='max-w-7xl mx-auto bg-[#14143C]'>
            <div className={ramabhadra.className}>
                <div className="pt-[85px]">
                    <OpenAIAzureSuggestion term={genre}/>
                </div>
                <div className="flex flex-col space-y-5 mt-[50px]">
                        <h1 className="text-4xl sm:text-5xl font-bold px-10 text-white">Results from {genre}</h1>

                    <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
                </div>
            </div>
        </div>
    )
}

export default GenrePage;