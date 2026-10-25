import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function useSeriesDetails() {
  const { show_id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["series", show_id],
    queryFn: () => fetchDetails(show_id),
  });
  return { series: data, isLoading, isError };
}
async function fetchDetails(seriesId) {
  const url = `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTk0NjcxMzEwZWYyMDA3ZDIyYmU2YmFmYzZmYzNiMiIsIm5iZiI6MTc5MTk3NzU5OC45NjcsInN1YiI6IjZhY2Y2ODdlZGNjZDc2OGNhMDhmMzM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VBd3526pZY9QmKDXqMiY4hbjr_WurecuxP97D5eTsnI",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}