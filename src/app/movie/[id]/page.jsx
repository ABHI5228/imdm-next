import Image from "next/image";

export default async function MoviePage({ params }) {
  const { id: movieId } = await params;

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${movieId}`
  );

  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={movie.Poster || '/no-image.svg'}
          alt={movie.Title || 'Movie poster'}
          width={500}
          height={300}
          className="rounded-lg"
        />

        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.Title || movie.name}</h2>
          <p className="mb-3">
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.Year}
          </p>
          <p className="mb-3">
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.imdbRating || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}