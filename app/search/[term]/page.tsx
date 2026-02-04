import MoviesCarousel from '@/components/MoviesCarousel';
import AISearchSuggestion from '@/components/AISearchSuggestion';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import { ramabhadra } from '@/utils/fonts';
import MoviesShowcaseGrid from '@/components/MoviesShowcaseGrid';

type SearchProps = {
    params: Promise<{ term: string }>;
  };

async function SearchPage({ params }: SearchProps) {
    const { term } = await params; 
    if (!term) notFound();

    const termToUse = decodeURIComponent(term); 
    console.log("termToUse: ", termToUse);

    const movies = await getSearchedMovies(termToUse);

    const popularMovies = await getPopularMovies();

    return (
        <div className='max-w-7xl mx-auto bg-[#17171B]'>
            <div className={`${ramabhadra.className} py-6 sm:py-12`}>
                <div className='flex flex-col space-y-4 pt-16 md:pt-20'>
                    <AISearchSuggestion term={termToUse} />
                    <div className='h-[1px] bg-white/10'/>
                    <MoviesShowcaseGrid title="Movies" movies={movies} termToUse={termToUse} />
                    <MoviesCarousel title="You may also like..." movies={popularMovies} />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;