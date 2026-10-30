import { Link } from "react-router";


function MovieCard({movie}) {
  return (
    <div key={movie.id} className="overflow-hidden rounded-xl">
      <Link to={`/details/movie/${movie.id}`}><img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full aspect-2/3 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              /></Link>
              
            </div>
  )
}

export default MovieCard
