import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import CastleBanner from '@/components/CastleBanner';
import MoviesCarousel from '@/components/MoviesCarousel';
import { 
  getPopularMovies, 
  getTopRatedMovies, 
  getUpcomingMovies, 
  getNowPlayingMovies, 
  getDiscoverTV, 
  getTopRatedTV, 
  getAiringTodayTV 
} from '@/lib/getMovies';

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  // const nowPlayingMovies = await getNowPlayingMovies();

  const topRatedTV = await getTopRatedTV();
  const discoverTV = await getDiscoverTV();
  const airingTodayTV = await getAiringTodayTV();

  return (
    <main className="pb-[60px]">
      <CastleBanner  />  
      <CarouselBannerWrapper />
      <div className='flex flex-col space-y-0 mt-0 sm:-mt-20 md:-mt-35'>
        <MoviesCarousel movies={popularMovies} title="Popular Movies" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated Movies" />
        <MoviesCarousel movies={upcomingMovies} title="Upcoming Movies" />
        <MoviesCarousel movies={airingTodayTV} title="Airing Today TV" />
        <MoviesCarousel movies={topRatedTV} title="Top Rated TV" />
        <MoviesCarousel movies={discoverTV} title="Discover TV"/>
      </div>
    </main>
  )
}
