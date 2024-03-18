
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import CastleBanner from '@/components/CastleBanner';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies, getDiscoverTV } from '@/lib/getMovies';


export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();
  const discoverTV = await getDiscoverTV();

  return (
    <main className="">
      {/* <CarouselBannerWrapper /> */}
      <CastleBanner  />  

      <div className='flex flex-col space-y-2 mt-11 lg:-mt-28'>
        <MoviesCarousel movies={topRatedMovies} title="Now Playing" />
        {/* <MoviesCarousel movies={topRatedMovies} title="Top Rated" /> */}
        <MoviesCarousel movies={discoverTV} title="Discover TV"/>
        {/* <MoviesCarousel movies={upcomingMovies} title="Upcoming" /> */}
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  )
}
