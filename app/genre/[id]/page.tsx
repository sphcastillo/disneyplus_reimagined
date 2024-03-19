import MoviesCarousel from "@/components/MoviesCarousel";
import OpenAIAzureSuggestion from "@/components/ui/OpenAIAzureSuggestion";
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
        <div className='w-full bg-[#14143C]'>
            <OpenAIAzureSuggestion term={genre}/>

            <div className="flex flex-col space-y-5 mt-10 xl:mt-42">
                <div className={ramabhadra.className}>
                    <h1 className="text-4xl sm:text-5xl font-bold px-10 text-white">Results from {genre}</h1>
                </div>
                <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
            </div>
        </div>
    )
}

export default GenrePage;