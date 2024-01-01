import { SearchResults } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {

    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMBD_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24, // 24 hours default 
        },
    };


    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;

    return data;

}