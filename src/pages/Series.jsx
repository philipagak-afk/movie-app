import { Link } from "react-router";
import { useSeries } from "../hooks/useSeries";


function Series() {
  const{series}=useSeries()
  return (
       <div className="w-full h-full bg-[#030014] ">
      <div className="w-full min-h-[90vh] max-w-360 mx-auto">
        <h1 className="text-white text-center font-semibold text-2xl pt-4">
          Find &nbsp;
          <span className="bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Series
          </span>
          &nbsp; You'll Enjoy Without the Hassle
        </h1>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">All Series</h2>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-6">
          {series?.map((show) => (
         <Link
              to={`/details/tv/${show.id}`}
              key={show.id}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.title}
                className="w-full aspect-2/3 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Series