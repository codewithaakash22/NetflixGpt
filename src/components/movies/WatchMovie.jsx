import {useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import MoviePlayer from "./MoviePlayer";
import useMovieDetails from "../../hooks/useMovieDetails";
import useSelectedMovieTrailer from "../../hooks/useSelectedMovieTrailer";
import MovieList from './MovieList';
import { useSelector } from "react-redux";
import CastList from "./CastList";
import MoviePlayerShimmer from "../ui/MoviePlayerShimmer";

const WatchMovie = () => {
const {movieId} = useParams();
useMovieDetails(movieId);
useSelectedMovieTrailer(movieId);

const recommandedMovies = useSelector((store)=> store.movies.popularMovies);
const selectedMovie = useSelector((store) => store.movies.selectedMovie);
const selectedMovieTrailer = useSelector((store) => store.movies.selectedMovieTrailer);
const isLoading = !selectedMovie || !selectedMovieTrailer;


return( 
    <div className="bg-black pt-16 md:py-10 md:px-20 pb-10">
        {selectedMovieTrailer ? <MoviePlayer /> : <MoviePlayerShimmer />}
        <MovieInfo/>
        <CastList isLoading={isLoading}/>
        <MovieList title={"More like this"} movies={recommandedMovies} isLoading={isLoading}/>
    </div>
  )
}

export default WatchMovie;
