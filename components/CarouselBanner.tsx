"use client"
// dependent on user's browser

import { Movie } from "@/typings";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
    movies: Movie[]; 
}

Autoplay.globalOptions = { delay: 6000 };

function CarouselBanner({ movies }: Props) {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      function updateHeight(){
        if(containerRef.current){
          const height = containerRef.current.clientHeight;
          const newHeight = height * (3/4);
          containerRef.current.style.height = `${height}px`;
        }
      }
      window.addEventListener('resize', updateHeight);
      updateHeight();
      return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
      Autoplay(),
    ]);

    return (
      <div 
        className="overflow-hidden md:-mt-0 relative cursor-pointer"
        // ref={(node) => {
        //   if(node){
        //     emblaRef(node);
        //     containerRef.current = node;
        //   }
        // }}
        ref={emblaRef}
      >
        <div className="flex">
          {movies.map((movie) => (
            <div className="flex-full min-w-0 relative" 
              key={movie.id}
            >
              <Image 
                key={movie.id}
                alt="movie poster banner"
                width={1920}
                height={810}
                src={getImagePath(movie.backdrop_path, true)}
              />

              <div className="absolute mt-0 top-0 pt-40 sm:pt-48 xl:pt-52 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className="text-2xl sm:text-4xl font-bold max-w-xl z-50">{movie.title}</h2>
                <p className="text-[16px] sm:text-xl max-w-xl line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
        
      </div>
    )
}

export default CarouselBanner;