import MovieCard from "../components/MovieCard";
import { useMovie } from "../hooks/useMovie"

function Home() {
    const {movies} = useMovie();
    console.log(movies)
  return (
    <div className="w-full min-h-screen bg-[#030014] text-white">
      <div className="text-center leading-tight text-2xl ">
  <h1>Find <span className="text-2xl font-semibold text-purple-500 ">Movies</span> You'll Enjoy Without the Hassle</h1>
</div>
<h2>All Movies</h2>
    <ul className="flex w-full  flex-wrap items-center justify-between">
      {movies?.map((movie)=>(
        <MovieCard key={movie.id} movie={movie} />
      ))}

    </ul>
      </div>
  )
}

export default Home