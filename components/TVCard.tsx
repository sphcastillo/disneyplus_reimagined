import getImagePath from '@/lib/getImagePath';
import { Series } from '@/typings'
import Image from 'next/image';
import { Ramabhadra } from 'next/font/google';

const ramabhadra = Ramabhadra({ weight: "400", subsets: ['latin'] });

function TVCard({ series } : { series: Series }) {
  // console.log("series: ", series)
  return (
    <div className='relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg'>
    
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10"/>
        <div className={ramabhadra.className}>
          <p className='absolute z-20 bottom-5 left-5 text-white text-[12px] md:text-[14px]'>{series.original_name}</p>
        </div>
        <Image 
            className='w-fit max-w-[210px] h-64 sm:max-w-[230px] sm:h-66 md:max-w-[280px] md:h-67 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm'
            src= {getImagePath(series.backdrop_path || series.poster_path)}
            alt= {series.title}
            width= {1920}
            height= {1080}
            key= {series.id}
        />
    </div>
  )
}

export default TVCard;