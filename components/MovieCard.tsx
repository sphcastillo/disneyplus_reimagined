import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";
import { ramabhadra } from "@/utils/fonts/fonts";


const imageClassByVariant = {
  default:
    "w-fit max-w-[210px] h-32 sm:max-w-[230px] sm:h-34 md:max-w-[280px] md:h-42 object-cover object-center shadow-md shadow-black/40 drop-shadow-xl rounded-sm rounded-b-2xl",
  compact:
    "w-fit max-w-[210px] h-32 sm:max-w-[230px] sm:h-34 md:max-w-[180px] md:h-28 object-cover object-center shadow-md shadow-black/40 drop-shadow-xl rounded-sm rounded-b-2xl",
  grid:
    "w-full h-full min-h-[140px] object-cover object-center shadow-md shadow-black/40",
};

function MovieCard({
  movie,
  compact,
  variant = "default",
}: {
  movie: Movie;
  compact?: boolean;
  variant?: "default" | "compact" | "grid";
}) {
  const mode = variant === "grid" ? "grid" : compact ? "compact" : "default";
  const imageClass = imageClassByVariant[mode];

  if (variant === "grid") {
    return (
      <div className="relative h-[140px] w-full flex-shrink-0 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 z-10" />
        <Image
          className={imageClass}
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          width={1920}
          height={1080}
          key={movie.id}
        />
      </div>
    );
  }

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
          className={imageClass}
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
