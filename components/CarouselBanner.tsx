"use client"
// dependent on user's browser

import { Movie } from "@/typings";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
    movies: Movie[]; 
}

Autoplay.globalOptions = { delay: 6000 };

function CarouselBanner({ movies }: Props) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 100 });

    useEffect(() => {
      if (emblaApi){
        const autoplay = Autoplay(emblaApi);
        autoplay.start();
      }
    }, [emblaApi]);

    return (
      <div 
        className="overflow-hidden md:-mt-0 relative cursor-pointer"
        ref={emblaRef}
      >
        <div className="flex pt-4 pb-[16px] sm:pb-[78px]">
          {movies.map((movie) => (
            <div 
              className="half-width min-w-0 relative p-3" 
              style={{ flex: '0 0 33%' }} 
              key={movie.id}
            >
              <Image 
                key={movie.id}
                alt="movie poster banner"
                width={1920}
                height={810}
                src={getImagePath(movie.backdrop_path, true)}
                className="h-[245px] sm:h-[320px] rounded-sm object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl"
              />

              <div className="absolute mt-0 top-0 pt-40 sm:pt-48 xl:pt-52 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/30 via-transparent to-transparent p-5 space-y-5 text-white">
                <h2 className="text-center sm:text-left pt-8 sm:pt-0 text-[14px] sm:text-[17px] font-bold max-w-xl z-50">{movie.title}</h2>
                <p className="hidden text-[13px] sm:text-[13px] max-w-xl sm:line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#1A1C29]" /> */}
        
      </div>
    )
}

export default CarouselBanner;