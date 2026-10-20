import { useQuery } from "@tanstack/react-query";

 export function useMovies(){
    const{data,isLoading,isError}=useQuery({
        queryKey:["movies"],
        queryFn:fetchmovies
    })
return {movies:data,isLoading,isError}
    

 }
 async function fetchmovies(){
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI0ODJiNWM0YWMyMTc4NjQ1MTlmZjcwNmZmYzdjMSIsIm5iZiI6MTc5MTk3Nzk2MC42NDMwMDAxLCJzdWIiOiI2YWNmNjllODBjMTQzMmVjMDk4ZjMyZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nMLXeFuXYDedXq6yfLiBeeL5v8CN52C8eNI26S0VFXw'
  }
};
const response = await fetch(url,options)
const data = await response.json()
return data.results
 }
