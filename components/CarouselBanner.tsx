"use client"
// dependent on user's browser

import { Movie } from "@/typings";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";

type Props = {
    movies: Movie[]; 
}

Autoplay.globalOptions = { delay: 6000 };

function CarouselBanner({ movies }: Props) {

    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
      Autoplay(),
    ]);

    return (
      <div 
        className="overflow-hidden md:-mt-0 relative cursor-pointer"
        ref={emblaRef}
      >
        <div className="flex">
          {movies.map((movie) => (
            <div className="half-width min-w-0 relative" 
            style={{ flex: '0 0 33%' }} 
              key={movie.id}
            >
              <Image 
                key={movie.id}
                alt="movie poster banner"
                width={1920}
                height={810}
                src={getImagePath(movie.backdrop_path, true)}
              />

              {/* <div className="absolute mt-0 top-0 pt-40 sm:pt-48 xl:pt-52 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-2xl sm:text-4xl font-bold max-w-xl z-50">{movie.title}</h2>
                <p className="text-[16px] sm:text-xl max-w-xl line-clamp-3">{movie.overview}</p>
              </div> */}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#1A1C29]" />
        
      </div>
    )
}

export default CarouselBanner;