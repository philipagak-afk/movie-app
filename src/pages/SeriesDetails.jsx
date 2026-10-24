import { useState } from "react";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const IMAGE_BASE = "https://image.tmdb.org/t/p/";

function SeriesDetails() {
  const { id } = useParams();
  const [selectedSeason, setSelectedSeason] = useState(1);

  const token = import.meta.env.VITE_TMDB_TOKEN;

  const {
    data: series,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["series-details", id],
    queryFn: async () => {
      if (!token) {
        throw new Error(
          "TMDB token is missing. Check your .env file."
        );
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.status_message || "Failed to load series."
        );
      }

      return data;
    },
    enabled: !!id,
  });

  const seasons = series?.seasons ?? [];

  const selectedSeasonExists = seasons.some(
    (item) => item.season_number === selectedSeason
  );

  const activeSeason = selectedSeasonExists
    ? selectedSeason
    : seasons.find((item) => item.season_number > 0)?.season_number
      ?? seasons[0]?.season_number;

  const {
    data: season,
    isLoading: seasonLoading,
    isError: seasonError,
    error: seasonErrorMessage,
  } = useQuery({
    queryKey: ["season-details", id, activeSeason],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${activeSeason}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.status_message || "Failed to load season."
        );
      }

      return data;
    },
    enabled: !!id && !!token && !!series && activeSeason !== undefined,
  });

  if (isLoading) {
    return (
      <p className="min-h-screen bg-[#030014] p-6 text-white">
        Loading series...
      </p>
    );
  }

  if (isError || !series) {
    return (
      <main className="min-h-screen bg-[#030014] p-6 text-white">
        <Link to="/series" className="text-purple-300 hover:text-white">
          ← Back to series
        </Link>

        <h2 className="mt-6 text-xl font-bold">
          Could not load series.
        </h2>

        <p className="mt-3 text-red-400">
          {error?.message || "An unknown error occurred."}
        </p>

        <p className="mt-2 text-gray-400">
          Check your TMDB token in the .env file.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030014] text-white">
      <section
        className="min-h-[280px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,0,20,.8), rgba(3,0,20,.3)), linear-gradient(0deg, #030014, transparent), url(${IMAGE_BASE}original${series.backdrop_path || ""})`,
        }}
      >
        <div className="p-6 md:p-10">
          <Link
            to="/series"
            className="text-sm text-gray-300 hover:text-white"
          >
            ← Back to series
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-purple-300 md:text-5xl">
            {series.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 font-semibold">
            <span>
              {series.episode_run_time?.[0]
                ? `${series.episode_run_time[0]} min`
                : "N/A"}
            </span>

            <span>
              {series.first_air_date?.slice(0, 4) ?? "N/A"} -{" "}
              {series.last_air_date?.slice(0, 4) ?? "Present"}
            </span>

            <span>{series.vote_average?.toFixed(1) ?? "N/A"}</span>

            <span className="rounded bg-yellow-400 px-2 py-1 text-black">
              TMDB
            </span>
          </div>
        </div>
      </section>

      <section className="-mt-2">
        <h2 className="px-4 py-3 text-xl font-semibold">
          Seasons
        </h2>

        <div className="flex gap-8 overflow-x-auto border-b border-white/10 px-5 py-4">
          {seasons.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSeason(item.season_number)}
              className={`shrink-0 whitespace-nowrap border-b-2 pb-2 font-semibold transition ${
                activeSeason === item.season_number
                  ? "border-purple-400 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {item.season_number === 0
                ? "Specials"
                : `Season ${item.season_number}`}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 xl:grid-cols-3">
        {seasonLoading ? (
          <p className="text-gray-400">Loading episodes...</p>
        ) : seasonError ? (
          <p className="text-red-400">
            {seasonErrorMessage?.message || "Could not load episodes."}
          </p>
        ) : season?.episodes?.length ? (
          season.episodes.map((episode) => (
            <article
              key={episode.id}
              className="flex min-w-0 flex-col gap-3 sm:flex-row"
            >
              <img
                src={
                  episode.still_path
                    ? `${IMAGE_BASE}w500${episode.still_path}`
                    : series.poster_path
                      ? `${IMAGE_BASE}w500${series.poster_path}`
                      : ""
                }
                alt={episode.name}
                className="aspect-video w-full rounded-xl object-cover sm:w-3/5"
              />

              <div className="min-w-0 self-center">
                <h3 className="font-semibold text-purple-300">
                  {episode.episode_number}. {episode.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  {episode.air_date || "Air date unavailable"}
                </p>

                <p className="mt-3 text-gray-400">
                  {episode.runtime
                    ? `${episode.runtime} min`
                    : "Runtime unavailable"}
                </p>

                <p className="mt-3 text-sm text-gray-300">
                  {episode.overview || "No episode description available."}
                </p>
              </div>
            </article>
          ))
        ) : (
          <p className="text-gray-400">
            No episodes are available for this season.
          </p>
        )}
      </section>
    </main>
  );
}

export default SeriesDetails;
