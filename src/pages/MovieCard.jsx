import MovieData from '../MovieData'
import MoviePoster from './MoviePoster';
import Navbar from './Navbar'

function MovieCard(){
    return(
        <>
         <Navbar/>
         
         <div className="flex items-center flex-wrap justify-around gap-5 mt-20">
          {
            MovieData.map((data,index)=>(
                <MoviePoster key={index}  image={data.image}    slug={data.slug}     />
            ))
          }
          </div>
        </>
    )
}
export default MovieCard;