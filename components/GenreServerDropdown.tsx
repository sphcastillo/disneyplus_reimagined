import GenreDropdown from "./GenreDropdown";
import { Genres } from "@/typings";

async function fetchGenres(): Promise<Genres> {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMBD_API_KEY}`,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }

    return response.json();
}


export default async function GenreServerDropdown() {
    try {
        const data = await fetchGenres();
        return <GenreDropdown  genres={data.genres} />;
    } catch(error) {
        console.error("Error fetching genres: ",error);
        return <div className="text-white">Failed to load genres.</div>
    }

}
