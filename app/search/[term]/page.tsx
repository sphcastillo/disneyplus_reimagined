import MoviesCarousel from '@/components/MoviesCarousel';
import AISuggestion from '@/components/AISuggestion';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import { ramabhadra } from '@/utils/fonts/fonts';

type SearchProps = {
    params: Promise<{ term: string }>;
  };

async function SearchPage({ params }: SearchProps) {
    const { term } = await params; 
    // If no term is provided, return a 404
    if (!term) notFound();

    // Decode the term to use in the API call
    const termToUse = decodeURIComponent(term); 
    console.log("termToUse: ", termToUse);

    // API call to get the searched movies
    const movies = await getSearchedMovies(termToUse);

    // API call to get the popular movies
    const popularMovies = await getPopularMovies();

    return (
        <div className='max-w-7xl mx-auto bg-[#17171B]'>
            <div className={`${ramabhadra.className} py-6 sm:py-12`}>
                <div className='flex flex-col space-y-4 pt-16 md:pt-20'>
                    <div className='pt-[65px]'>
                        <h1 className='text-2xl sm:text-4xl px-6 sm:px-10 text-white'>Results for {termToUse}</h1>
                    </div>
                    <AISuggestion term={termToUse} />
                    <div className='h-[1px] bg-white/10'/>
                    <MoviesCarousel title="Movies" movies={movies} isVertical/>
                    <MoviesCarousel title="You may also like..." movies={popularMovies} />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;