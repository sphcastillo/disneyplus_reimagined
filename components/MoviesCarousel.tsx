import { Movie } from '@/typings';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';
import { Quattrocento_Sans } from 'next/font/google';

const quattrocentoSans = Quattrocento_Sans({ weight: "400", subsets: ['latin'] })

// props for the MoviesCarousel component
type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
}

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className='z-50'>
        <div className={quattrocentoSans.className}>
          <h2 className="text-[20px] font-bold px-10 py-2 text-white">{title}</h2>
        </div>
        <div className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide", 
          isVertical && "flex-col space-x-0 space-y-8"
        )}>
          {isVertical
            ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                  'flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <div className={quattrocentoSans.className}>
                    <p className='font-bold text-white text-[20px]'>
                      {movie.title} ({movie.release_date?.split("-")[0]})
                    </p>
                  </div>
                  <div className={quattrocentoSans.className}>
                    <p className='text-white mt-3'>{movie.overview}</p>
                  </div>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </div>
  )
}

export default MoviesCarousel;