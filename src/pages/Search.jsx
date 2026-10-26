import { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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
        throw new Error("TMDB token is missing. Check your .env file.");
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(searchTerm)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.status_message || "Search failed.");
      }

      return data.results ?? [];
    },
    enabled: searchTerm.trim().length > 0,
  });

  function handleSearch(event) {
    event.preventDefault();
    setSearchTerm(searchInput.trim());
  }

  return (
    <main className="min-h-screen bg-[#030014] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-center text-3xl font-bold sm:text-4xl">
          Discover{" "}
          <span className="bg-gradient-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Movies & Series
          </span>
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Find your next favourite movie or series.
        </p>

        <form
          onSubmit={handleSearch}
          className="mx-auto mb-10 flex max-w-2xl gap-3"
        >
          <input
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search for movies, series and people..."
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-purple-400"
          />

          <button
            type="submit"
            className="rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-500"
          >
            Search
          </button>
        </form>

        {!searchTerm && (
          <p className="text-center text-gray-400">
            Enter a title above to discover something to watch.
          </p>
        )}

        {isLoading && (
          <p className="text-center text-purple-300">
            Searching...
          </p>
        )}

        {isError && (
          <p className="text-center text-red-400">
            {error?.message || "Something went wrong while searching."}
          </p>
        )}

        {searchTerm && !isLoading && !isError && results?.length === 0 && (
          <p className="text-center text-gray-400">
            No results found for "{searchTerm}".
          </p>
        )}

        {results?.length > 0 && !isError && (
          <>
            <h2 className="mb-5 text-xl font-semibold">
              Search results for "{searchTerm}"
            </h2>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {results
                .filter((item) => item.media_type !== "person")
                .map((item) => (
                  <Link
                    key={`${item.media_type}-${item.id}`}
                    to={`/details/${item.media_type}/${item.id}`}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-purple-400/50"
                  >
                    {item.poster_path ? (
                      <img
                        src={`${IMAGE_BASE}${item.poster_path}`}
                        alt={item.title || item.name}
                        className="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex aspect-[2/3] items-center justify-center bg-white/10 p-4 text-center text-gray-400">
                        No poster available
                      </div>
                    )}

                    <div className="p-3">
                      <h3 className="line-clamp-2 font-semibold">
                        {item.title || item.name}
                      </h3>

                      <p className="mt-2 text-sm capitalize text-purple-300">
                        {item.media_type === "tv" ? "Series" : "Movie"}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {(item.release_date || item.first_air_date || "").slice(0, 4) || "Year unavailable"}
                      </p>

                      <p className="mt-1 text-sm text-yellow-400">
                        ★ {item.vote_average?.toFixed(1) ?? "N/A"}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Search;
