import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function useSeriesDetails() {
  const { series_id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["series", series_id],
    queryFn: () => fetchSeries(series_id),
  });
  return { series: data, isLoading, isError };
}
async function fetchSeries(seriesId) {
  const url = `https://api.themoviedb.org/3/movie/${seriesId}?language=en-US`;
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