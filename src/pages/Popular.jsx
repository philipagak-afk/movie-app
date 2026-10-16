
import MovieCard from "../components/MovieCard";
import { usePopular } from "../hooks/usePopular";

function Popular() {
  const { movies, isLoading, isError } = usePopular();

  if (isLoading) {
    return <p className="p-6 text-white">Loading popular movies...</p>;
  }

  if (isError) {
    return <p className="p-6 text-white">Failed to load popular movies.</p>;
  }

  return (
    <div className="min-h-screen w-full bg-[#030014]">
      <div className="mx-auto min-h-[90vh] w-full max-w-360 px-4 py-6">
        <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl">
          Popular <span className="text-purple-300">Movies</span>
        </h1>

        <h2 className="mt-8 text-2xl font-bold text-white">
          Trending with Everyone
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
