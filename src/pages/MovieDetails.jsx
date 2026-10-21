import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

function MovieDetails() {
  const { id } = useParams();

  const { data: movie, isLoading, isError } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }

      return response.json();
    },
    enabled: !!id,
  });

  if (isLoading) return <p className="p-6 text-white">Loading movie...</p>;

  if (isError || !movie) {
    return <p className="p-6 text-white">Could not load movie details.</p>;
  }

  const imageBase = "https://image.tmdb.org/t/p/original";

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.8)), url(${imageBase}${movie.backdrop_path || movie.poster_path})`,
      }}
    >
      <div className="min-h-screen p-6 md:p-10">
        <Link to="/" className="text-white hover:text-purple-400">
          ← Back to movies
        </Link>

        <h1 className="mt-8 text-center text-3xl font-bold text-purple-300 md:text-5xl">
          {movie.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 font-semibold">
          <span>{movie.runtime ? `${movie.runtime} min` : "Runtime unavailable"}</span>
          <span>
            {movie.release_date
              ? movie.release_date.slice(0, 4)
              : "Year unavailable"}
          </span>
          <span>⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}</span>
          <span className="rounded bg-yellow-400 px-2 text-black">TMDB</span>
        </div>

        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold text-gray-300">
            GENRES
          </h2>

          <div className="flex flex-wrap gap-3">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-black/40 px-4 py-2"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 max-w-5xl">
          <h2 className="mb-2 text-sm font-semibold text-gray-300">
            SUMMARY
          </h2>
          <p className="text-base leading-7 md:text-lg">
            {movie.overview || "No summary available."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
