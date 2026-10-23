import { useSeriesDetails } from "../hooks/UseMovieDetails";

function SeriesDetails() {
    const {movie} = useSeriesDetails();
  return (
    <main className="w-full min-h-[90vh]">
      <div className="w-full min-h-[90vh] relative">
        <img
          className="absolute z-10 h-[90vh] w-full object-cover  md:object-center object-top"
          alt=" backdrop for Spider-Man: Brand New Day"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        ></img>
        <div className="w-full min-h-[90vh] absolute bg-[#030014]/60  z-10 p-3">
          <p className="md:text-4xl text-2xl text-center  font-bold z-20 relative bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            {movie?.title}
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-white text-base font-semibold">145 min</p>
            <p className="text-white text-base font-semibold">2026</p>
            <p className="flex items-center gap-2">
              <span className="text-white font-semibold text-base">8.5</span>{" "}
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
              <button className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white">
                Science Fiction
              </button>
              <button className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white">
                Action
              </button>
              <button className="cursor-pointer hover:bg-slate-700/75 transition duration-500 ease-in-out bg-[#1C1E30]/75 text-sm rounded-full p-2 text-white">
                Adventure
              </button>
            </div>
          </div>
          <div className="mt-4 w-full">
            <h5 className="text-gray-400 uppercase text-sm font-semibold">
              summary
            </h5>
            <p className="text-white sm:w-2/3">
              Fighting crime full-time as Spider-Man in a world that doesn't
              remember him—and the pressure of seeing his old friends move on
              without him—sparks a change in Peter Parker he may not have the
              power to control. But that transformation might also be the only
              thing that can stop a shocking new threat to the city and those he
              loves - a powerful villain no one can even see.
            </p>
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default SeriesDetails;