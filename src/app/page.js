import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "movie";
  let searchQuery = "movie";

  if (genre === "fetchTopRated") {
    searchQuery = "drama";  // Top-rated → Drama (award-winning films)
  } else if (genre === "fetchTrending") {
    searchQuery = "action"; // Trending → Action (popular/blockbuster)
  }

  const res = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&type=movie&page=1`);
  const data = await res.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Failed to fetch data");
  }

  const results = (data.Search || []).map(item => ({
    id: item.imdbID,
    original_title: item.Title,
    poster_path: item.Poster,
    release_date: item.Year,
  }));

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
