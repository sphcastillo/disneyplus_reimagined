import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { quattrocentoSans } from "@/utils/fonts";

type Props = {
  title?: string;
  movies: Movie[];
};

function MoviesGrid({ title, movies }: Props) {
  return (
    <div className="z-20">

      <div className="grid grid-cols-1 md:grid-cols-2 6xl:grid-cols-3 gap-6 px-5 lg:px-10 pb-10">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/40 shadow-lg shadow-black/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/15"
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_50%_at_0%_0%,rgba(168,85,247,0.08),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
            <MovieCard movie={movie} variant="grid" />
            <div className="relative flex flex-1 flex-col p-5 sm:p-6 min-w-0">
              <div className={`${quattrocentoSans.className}`}>
                <p className="font-bold text-white text-lg leading-tight sm:text-xl">
                  {movie.title}
                  <span className="ml-1.5 font-medium text-amber-200/90 text-base sm:text-lg">
                    ({movie.release_date?.split("-")[0]})
                  </span>
                </p>
              </div>
              <div className={`${quattrocentoSans.className} mt-3 flex-1`}>
                <p className="text-white/85 text-sm leading-relaxed sm:text-[15px] line-clamp-6 min-h-0">
                  {movie.overview}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MoviesGrid;
