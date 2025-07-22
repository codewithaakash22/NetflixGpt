import {useParams } from "react-router-dom";
import { useEffect } from "react";
import MovieInfo from "./MovieInfo";
import MoviePlayer from "./MoviePlayer";
import useMovieDetails from "../../hooks/useMovieDetails";
import useSelectedMovieTrailer from "../../hooks/useSelectedMovieTrailer";
import MovieList from './MovieList';
import { useDispatch, useSelector } from "react-redux";
import CastList from "./CastList";
import MoviePlayerShimmer from "../ui/MoviePlayerShimmer";
import { removeSelectedMovieTrailer } from "../../utils/moviesSlice";

const WatchMovie = () => {
const {movieId} = useParams();
useMovieDetails(movieId);
useSelectedMovieTrailer(movieId);
const dispatch = useDispatch();

const selectedMovie = useSelector((store) => store.movies.selectedMovie);
const selectedMovieTrailer = useSelector((store) => store.movies.selectedMovieTrailer);
const isLoading = !selectedMovie || !selectedMovieTrailer;


// Scroll to top when component mounts or movieId changes
useEffect(() => {
  window.scrollTo(0, 0);

  return () =>{
    dispatch(removeSelectedMovieTrailer());
    console.log("cleaup");
  }
}, [movieId]);

return( 
    <div className="bg-black pt-16 md:py-10 md:px-20 pb-10">
        {isLoading ? <MoviePlayerShimmer /> : <><MoviePlayer trailerVideo={selectedMovieTrailer} />
        <MovieInfo/></>}
        <CastList credits={selectedMovie?.credits} isLoading={isLoading}/>
        <MovieList title={"More like this"} movies={selectedMovie?.recommendedMovies?.results} isLoading={isLoading}/>
    </div>
  )
}

export default WatchMovie;
