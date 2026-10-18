import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";
import NowShowing from "./NowShowing"


function Home() {
  
const{movies}= useMovies()
  return (
    <div className="w-full h-full bg-[#030014] ">
      <div className="w-full min-h-[90vh] max-w-360 mx-auto">
        <h1 className="text-white text-center font-semibold text-2xl pt-4">
          Find &nbsp;
          <span className="bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
            Movies
          </span>
          &nbsp; You'll Enjoy Without the Hassle
        </h1>

        <h2 class="text-2xl font-bold text-white sm:text-3xl">All Movies</h2>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-6">
          {movies?.map((movie) => (
         <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home