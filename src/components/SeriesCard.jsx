
import { Link } from "react-router";

function SeriesCard({ series }) {
  return (
    <Link
      to={`/details/series/${series.id}`}
      className="block overflow-hidden rounded-xl"
    >
      <img
        src={
          series.poster_path
            ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
            : "/placeholder.png"
        }
        alt={series.name
        className="aspect-2/3 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
      />

      <h2 className="mt-2 font-semibold text-white">
        {series.name}
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        {series.first_air_date?.slice(0, 4) || "Year unavailable"}
      </p>
    </Link>
  );
}

export default SeriesCard;
