import { cn } from '@/lib/utils';
import { Series } from '@/typings';
import { Quattrocento_Sans } from 'next/font/google';
import TVCard from './TVCard';

const quattrocentoSans = Quattrocento_Sans({ weight: "400", subsets: ['latin'] })

// props for the MoviesCarousel component
type Props = {
  title?: string;
  tv: Series[];
  isVertical?: boolean;
}

function TVCarousel({ title, tv, isVertical }: Props) {
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
            ? tv.map((series) => (
              <div
                key={series.id}
                className={cn(
                  isVertical &&
                  'flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'
                )}
              >
                <TVCard series={series} />
                <div className="max-w-2xl">
                  <div className={quattrocentoSans.className}>
                    <p className='font-bold text-white text-[20px]'>
                      {series.title} ({series.release_date?.split("-")[0]})
                    </p>
                  </div>
                  <div className={quattrocentoSans.className}>
                    <p className='text-white mt-3'>{series.overview}</p>
                  </div>
                </div>
              </div>
            ))
          : tv?.map((series) => <TVCard  key={series.id} series={series} />)}
        </div>
    </div>
  )
}

export default TVCarousel;