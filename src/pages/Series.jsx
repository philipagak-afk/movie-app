
import MovieCard from "../components/MovieCard";
import { useSeries } from "../hooks/useSeries";

function Series() {
  const { series, isLoading, isError } = useSeries();

  if (isLoading) {
    return <p className="p-6 text-white">Loading series...</p>;
  }

  if (isError) {
    return <p className="p-6 text-white">Failed to load series.</p>;
  }

  return (
    <div className="min-h-screen w-full bg-[#030014]">
      <div className="mx-auto min-h-[90vh] w-full max-w-360 px-4 py-6">
        <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl">
          Discover <span className="text-purple-300">TV Series</span>
        </h1>

        <h2 className="mt-8 text-2xl font-bold text-white">
          Popular Series
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5">
          {series?.map((show) => (
            <MovieCard key={show.id} movie={show} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Series;
