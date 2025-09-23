import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import DisneyCategories from '@/components/DisneyCategories';
import HeroCarousel from '@/components/HeroCarousel';
import MoviesCarousel from '@/components/MoviesCarousel';
import TVCarousel from '@/components/TVCarousel';

import { 
  getPopularMovies, 
  getTopRatedMovies, 
  getUpcomingMovies,  
} from '@/lib/getMovies';
import {  
  getDiscoverTV, 
  getTopRatedTV, 
  getAiringTodayTV 
} from '@/lib/getTV';

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  const topRatedTV = await getTopRatedTV();
  const discoverTV = await getDiscoverTV();
  const airingTodayTV = await getAiringTodayTV();

  return (
    <main>
      <div className='mt-20 lg:mt-28'>
        <HeroCarousel />
      </div>
      
      <DisneyCategories />
      <CarouselBannerWrapper />

      <div className='flex flex-col z-10 space-y-0 mt-0 sm:-mt-20 md:-mt-35'>
        <MoviesCarousel movies={popularMovies} title="Popular Movies" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated Movies" />
        <MoviesCarousel movies={upcomingMovies} title="Upcoming Movies" />

        <TVCarousel tv={airingTodayTV} title="Airing Today TV" />
        <TVCarousel tv={topRatedTV} title="Top Rated TV" />
        <TVCarousel tv={discoverTV} title="Discover TV"/>
      </div>
    </main>
  )
}
