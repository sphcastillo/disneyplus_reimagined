
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies } from '@/lib/getMovies';


export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />
      

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCarousel movies={topRatedMovies} title="Now Playing" />
        {/* <MoviesCarousel movies={topRatedMovies} title="Top Rated" /> */}
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  )
}
