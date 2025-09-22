import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";
import { ramabhadra } from "@/utils/fonts/fonts";


function MovieCard({ movie }: { movie: Movie }) {
  return (
    <>
      <div
        className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg rounded-b-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#17171B] z-10" />
        <div className={ramabhadra.className}>
          <p className="absolute z-20 bottom-5 left-2 text-white text-[12px] md:text-[15px]">
            {movie.title}
          </p>
        </div>
        <Image
          className="w-fit max-w-[210px] h-32 sm:max-w-[230px] sm:h-34 md:max-w-[280px] md:h-42 object-cover object-center shadow-md shadow-black/40 drop-shadow-xl rounded-sm rounded-b-2xl"
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          width={1920}
          height={1080}
          key={movie.id}
        />
      </div>
    </>
  );
}

export default MovieCard;
