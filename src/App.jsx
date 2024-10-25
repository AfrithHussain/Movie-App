import { Route, Routes } from "react-router-dom";
import MovieCard from "./pages/MovieCard";
import MovieDetails from "./pages/MovieDetails";
function App(){
  return(
    <>
    <Routes>
  

       <Route path="/" element={<MovieCard/>}    />
       <Route path="/details/:slug" element={<MovieDetails/>}    />
       


    </Routes>
    </>
  )
}
export default App;