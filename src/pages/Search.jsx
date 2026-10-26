import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("query") || "";
  const [searchInput, setSearchInput] = useState(searchTerm);

  useEffect(() => {
    setSearchInput(searchTerm);
  }, [searchTerm]);

  const {
    data: results,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["search", searchTerm],

    queryFn: async () => {
      const token = import.meta.env.VITE_TMDB_TOKEN;

      if (!token) {
        throw new Error(
          "TMDB token is missing. Check your .env file."
        );
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
          searchTerm
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.status_message || "Failed to search TMDB."
        );
      }

      return data.results || [];
    },

    enabled: searchTerm.trim().length > 0,
  });

  function handleSearch(event) {
    event.preventDefault();

    const query = searchInput.trim();

    if (query) {
      setSearchParams({ query });
    }
  }

  const filteredResults = (results || []).filter(
    (item) =>
      item.media_type === "movie" || item.media_type === "tv"
  );

  return (
    <main className="min-h-screen bg-[#030014] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Discover{" "}
          <span className="bg-gradient-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Movies & Series
          </span>
        </h1>

        <p className="mb-8 mt-3 text-center text-gray-400">
          Find your next favourite movie or series.
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mb-10 flex max-w-2xl gap-3"
        >
          <input
            type="search"
            value={searchInput}
            onChange={(event) =>
              setSearchInput(event.target.value)
            }
            placeholder="Search for movies, series and people..."
            aria-label="Search movies and series"
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />

          <button
            type="submit"
            disabled={!searchInput.trim()}
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Search
          </button>
        </form>

        {/* Initial Message */}
        {!searchTerm && (
          <div className="py-12 text-center">
            <h2 className="text-xl font-semibold text-purple-300">
              What do you want to watch?
            </h2>

            <p className="mt-2 text-gray-400">
              Enter a movie or series title to get started.
            </p>
          </div>
        )}

        {/* Loading */}
        {searchTerm && isLoading && (
          <p className="py-10 text-center text-purple-300">
            Searching for "{searchTerm}"...
          </p>
        )}

        {/* Error */}
        {searchTerm && isError && (
          <div className="py-10 text-center">
            <h2 className="text-xl font-semibold text-red-400">
              Search failed
            </h2>

            <p className="mt-3 text-gray-400">
              {error?.message || "Something went wrong."}
            </p>
          </div>
        )}

        {/* Search Results */}
        {searchTerm &&
          !isLoading &&
          !isError &&
          filteredResults.length > 0 && (
            <section>
              <h2 className="mb-6 text-xl font-semibold">
                Results for "{searchTerm}"
              </h2>

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {filteredResults.map((item) => {
                  const isSeries = item.media_type === "tv";
                  const title = item.title || item.name;
                  const releaseDate =
                    item.release_date || item.first_air_date;

                  return (
                    <Link
                      key={`${item.media_type}-${item.id}`}
                      to={
                        isSeries
                          ? `/details/series/${item.id}`
                          : `/details/movie/${item.id}`
                      }
                      className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60"
                    >
                      {/* Poster */}
                      {item.poster_path ? (
                        <img
                          src={`${IMAGE_BASE}${item.poster_path}`}
                          alt={title}
                          loading="lazy"
                          className="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex aspect-[2/3] items-center justify-center bg-white/10 p-4 text-center text-gray-400">
                          No poster available
                        </div>
                      )}

                      {/* Details */}
                      <div className="p-3">
                        <h3 className="line-clamp-2 font-semibold transition group-hover:text-purple-300">
                          {title}
                        </h3>

                        <p className="mt-2 text-sm text-purple-300">
                          {isSeries ? "TV Series" : "Movie"}
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          {releaseDate
                            ? releaseDate.slice(0, 4)
                            : "Year unavailable"}
                        </p>

                        <p className="mt-2 text-sm text-yellow-400">
                          ★{" "}
                          {typeof item.vote_average === "number"
                            ? item.vote_average.toFixed(1)
                            : "N/A"}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

        {/* No Results */}
        {searchTerm &&
          !isLoading &&
          !isError &&
          filteredResults.length === 0 && (
            <div className="py-12 text-center">
              <h2 className="text-xl font-semibold">
                No results found
              </h2>

              <p className="mt-3 text-gray-400">
                We couldn't find any movies or series matching "
                {searchTerm}". Try another title.
              </p>
            </div>
          )}
      </div>
    </main>
  );
}

export default Search;
