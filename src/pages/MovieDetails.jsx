import { useParams } from "react-router-dom";
import MovieData from "../MovieData";
import ReactPlayer from 'react-player'
import MoviePoster from "./MoviePoster";





function MovieDetails(){
    let {slug} = useParams();
    let movies = MovieData.find((data)=>{
        return  data.slug == slug;
    })

   let suggestionMovies = MovieData.filter((movie)=>(
     movie.genre == movies.genre && movie.title !== movies.title
   ))
    
    return(
        <>
   
        
   <div className="video-wrapper mt-10" style={{ position: 'relative', paddingTop: '56.25%' }}>
      <ReactPlayer url={movies.trailer} playing={true} loop={true} muted={true} controls={false} volume={1} width="100%" height="80%" className="overflow-hidden  scale-[1.28] absolute top-0 left-0" />
    </div>

    <div className="text-white w-[450px] absolute top-64 left-10">
      <h1 className="text-5xl font-black leading-10">{movies.title}</h1>
      <p className="leading-7 text-lg mt-6">{movies.description}</p>
      <button className=" mt-3 bg-white text-black text-md font-semibold px-3 py-1 rounded">Add to watchlist</button>
      
    </div>
     <div className="">
        <h1 className="text-white text-4xl font-black ml-10 ">More Movies Like This</h1>
     </div>
      <div className="flex gap-10 ml-10 mt-10">
        {
            suggestionMovies.map((data,afrith)=><MoviePoster key={afrith} image={data.image}    slug={data.slug}   />)
        }
       </div> 

      
        </>
    )
}
export default MovieDetails;