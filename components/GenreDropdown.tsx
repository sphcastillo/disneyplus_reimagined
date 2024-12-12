import { Genres } from "@/typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Ramabhadra } from "next/font/google";

const ramabhadra = Ramabhadra({ weight: "400", subsets: ["latin"] });

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMBD_API_KEY}`,
    },
    // same request will be cached for 24 hours
    // ISR : Incremental Static Regeneration
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  // showcase the genres
  // console.log("genres: ", data.genres);

  return (
    <div className={`${ramabhadra.className} flex`}>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          <div className='uppercase ml-7 sm:ml-0'>Genres</div>
          <ChevronDown className="ml-1 hidden sm:block" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[500] bg-gradient-to-b from-[#14143C] to-[#142878] text-white">
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {data.genres.map((genre) => (
            <DropdownMenuItem key={genre.id} className="">
              <Link
                href={`/genre/${genre.id}?genre=${genre.name}`}
                className=""
              >
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default GenreDropdown;
