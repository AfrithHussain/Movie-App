import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function MoviePoster({image, slug}){
    return(
        <>
        <Link to={`/details/${slug}`}>
        <div className="">
          <LazyLoadImage src={image} className="w-64 object-cover h-72 rounded-md flex-shrink " alt="" />
          </div></Link>
        </>
    )
}
export default MoviePoster;