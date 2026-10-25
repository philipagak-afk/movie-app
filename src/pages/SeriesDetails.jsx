import { useSeriesDetails } from "../hooks/useSeriesDetails";

function SeriesDetails() {
  const { series } = useSeriesDetails();
  return (
    <main className="w-full min-h-[90vh]">
      <div className="w-full min-h-[90vh] relative">
        <img
          className="absolute z-10 h-[90vh] w-full object-cover  md:object-center object-top"
          alt={`backdrop for ${series?.name}`}
          src={`https://image.tmdb.org/t/p/original${series?.backdrop_path}`}
        ></img>
        <div className="w-full min-h-[90vh] absolute bg-[#030014]/60  z-10 p-3">
          <p className="md:text-4xl text-2xl text-center  font-bold z-20 relative bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            {series?.name}
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-white text-base font-semibold">
              {series?.episode_run_time?.[0]} min
            </p>
            <p className="text-white text-base font-semibold">
              {series?.first_air_date?.split("-")[0]}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-white font-semibold text-base">
                {series?.vote_average.toFixed(1)}
              </span>{" "}
              <span className="bg-[#f5c518] text-black font-extrabold p-0.5 text-xs rounded-lg">
                IMDb
              </span>
            </p>
          </div>
          <div className="mt-4">
            <h5 className="text-gray-400 uppercase text-sm font-semibold">
              genres
            </h5>
            <div className="flex items-center gap-6 mt-4">
              {series?.genres?.map((genre) => (
                <button
                  key={genre.id}
                  className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white"
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 w-full">
            <h5 className="text-gray-400 uppercase text-sm font-semibold">
              summary
            </h5>
            <p className="text-white sm:w-2/3">{series?.overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default SeriesDetails;