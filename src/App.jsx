import {BrowserRouter, Routes, Route} from 'react-router'
import Layout from './pages/layout'
import Home from './pages/home'
import NowShowing from './pages/NowShowing'
import Series from './pages/Series'
import Popular from './pages/Popular'
import MovieDetails from './pages/MovieDetails'
import SeriesDetails from './pages/SeriesDetails'
import Search from './pages/Search';


function App() {
  return (
 <BrowserRouter>
<Routes>
 <Route path="" element={<Layout/>}>
 <Route index element={<Home/>}/>
 <Route path="now-showing" element={<NowShowing/>}/>
 <Route path="series" element={<Series/>}/>
 <Route path="popular" element={<Popular/>}/>
 <Route path ="details/movie/:movie_id"element={<MovieDetails />}/>
 <Route path ="details/tv/:show_id" element={<SeriesDetails/>}/>
 <Route path="search" element={<Search />} />
 </Route>
</Routes>
  </BrowserRouter>
      
    
  )
}

export default App