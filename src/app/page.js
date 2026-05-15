import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const params = await searchParams;
  const genre = params.genre || "movie";
  const titleQuery = params.s;
  let searchQuery = titleQuery || "movie";

  if (!titleQuery) {
    if (genre === "fetchTopRated") {
      searchQuery = "drama";
    } else if (genre === "fetchTrending") {
      searchQuery = "action";
    }
  }

  const res = await fetch(
    `https://omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchQuery)}&type=movie&page=1`,
    { next: { revalidate: 10000 } }
  );
  

  const data = await res.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Failed to fetch data");
  }

  const results = (data.Search || []).map(item => ({
    imdbID: item.imdbID,
    Title: item.Title,
    Poster: item.Poster,
    Year: item.Year,
  }));

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
