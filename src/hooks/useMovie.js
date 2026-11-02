import { useQuery } from "@tanstack/react-query";

export function useMovie() {
const {data,isLoading,isError} = useQuery({
  queryKey: ["movies"],
  queryFn: fetchMovies
})

return {movies: data,isLoading,isError};
}


async function fetchMovies() {
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2MzYzNDBmNGIwYWYzMjViNTkyYmNlOTQwNTk3NSIsIm5iZiI6MTc5MTk3NzYzNS41Nywic3ViIjoiNmFjZjY4YTMwYzE0MzJlYzA5OGYzMmMyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1fwn9fFBBxNmbS8OMs2PsyA4TzqR6yGR0re5HwLyBPg'}
};
const response = await fetch(url, options);
const data = await response.json();
return data.results;

}