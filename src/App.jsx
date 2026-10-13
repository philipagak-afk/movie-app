import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import NowShowing from "./pages/NowShowing"
import Series from "./pages/Series"
import Popular from "./pages/Popular"

function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="nowshowing" element={<NowShowing/>}/>
        <Route path="series" element={<Series/>}/>
        <Route path="popular" element={<Popular/>}/>
        

        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App