import MoviesCarousel from '@/components/MoviesCarousel';
import AISuggestion from '@/components/ui/AISuggestion';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import { Ramabhadra } from 'next/font/google';


const ramabhadra = Ramabhadra({ weight: "400", subsets: ['latin'] });

type Props = {
    params: {
        term: string;
    }
};

async function SearchPage({ params: { term } }: Props) {
    // If no term is provided, return a 404
    if (!term) notFound();

    // Decode the term to use in the API call
    const termToUse = decodeURI(term); 

    // API call to get the searched movies
    const movies = await getSearchedMovies(termToUse);

    // API call to get the popular movies
    const popularMovies = await getPopularMovies();

    return (
        <div className='w-full bg-[#14143C]'>
            <div className='flex flex-col space-y-4 pt-10'>
                <div className={ramabhadra.className}>
                    <h1 className='text-3xl sm:text-5xl px-10 text-white'>Results for {termToUse}</h1>
                </div>
                <AISuggestion term={termToUse} />
                <MoviesCarousel title="Movies" movies={movies} isVertical/>
                <MoviesCarousel title="You may also like..." movies={popularMovies} />
            </div>
        </div>
    )
}

export default SearchPage;