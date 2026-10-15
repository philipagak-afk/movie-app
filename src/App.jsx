import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import NowShowing from "./pages/NowShowing";
import Popular from "./pages/Popular";
import Series from "./pages/Series";

function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="now-showing" element={<NowShowing/>}/>
        <Route path="popular" element={<Popular/>}/>
        <Route path="series"  element={<Series/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App