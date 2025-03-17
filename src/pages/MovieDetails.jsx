import { useParams, useNavigate } from "react-router-dom";
import MovieData from "../MovieData";
import ReactPlayer from "react-player";
import MoviePoster from "./MoviePoster";

function MovieDetails() {
  let { slug } = useParams();
  let navigate = useNavigate();
  let movies = MovieData.find((data) => data.slug === slug);

  let suggestionMovies = MovieData.filter(
    (movie) => movie.genre === movies.genre && movie.title !== movies.title
  );

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-10 lg:px-20 text-white bg-black min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 right-5 bg-gray-800 text-white px-3 py-1 text-sm md:px-4 md:py-2 md:text-base rounded hover:bg-gray-700 transition-all"
      >
        ← Back to Home
      </button>

      {/* Video Section */}
      <div className="w-full relative mt-20 max-w-6xl shadow-lg shadow-gray-800 border border-gray-700 overflow-hidden">
        <div className="relative w-full h-60 md:h-96 lg:h-[500px]">
          <ReactPlayer
            url={movies.trailer}
            playing
            loop
            muted
            controls={false}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      </div>

      {/* Movie Info (Below Trailer on Small Screens) */}
      <div className="w-full max-w-6xl px-4 md:px-6 mt-6 md:mt-10 text-center md:text-left">
        <h1 className="text-xl md:text-4xl font-black leading-tight text-red-500">{movies.title}</h1>
        <p className="text-xs md:text-lg mt-2 md:mt-4 leading-relaxed text-gray-300">{movies.description}</p>
        <button className="mt-2 md:mt-4 bg-red-500 text-black text-xs md:text-md font-semibold px-2 md:px-5 py-1 md:py-2 rounded hover:bg-red-400 transition-all">
          + Add to Watchlist
        </button>
      </div>

      {/* Similar Movies Section */}
      <div className="w-full mt-10 md:mt-12">
        <h1 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-red-500">More Movies Like This</h1>
        {suggestionMovies.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {suggestionMovies.map((data, index) => (
              <MoviePoster key={index} image={data.image} slug={data.slug} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm md:text-lg">No related movies found.</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
