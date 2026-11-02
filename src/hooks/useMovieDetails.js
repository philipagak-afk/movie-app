import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function useMovieDetails() {
  const { movie_id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie", movie_id],
    queryFn: () => fetchDetails(movie_id),
  });
  return { movie: data, isLoading, isError };
}
async function fetchDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2MzYzNDBmNGIwYWYzMjViNTkyYmNlOTQwNTk3NSIsIm5iZiI6MTc5MTk3NzYzNS41Nywic3ViIjoiNmFjZjY4YTMwYzE0MzJlYzA5OGYzMmMyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1fwn9fFBBxNmbS8OMs2PsyA4TzqR6yGR0re5HwLyBPg",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}