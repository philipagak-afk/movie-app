import { useQuery } from "@tanstack/react-query";

 export function useSeries(){
    const{data,isLoading,isError}=useQuery({
        queryKey:["series"],
        queryFn:fetchseries
    })
return {series:data,isLoading,isError}
    

 }
 async function fetchseries(){
const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
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
