import {useNavigate, useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import MoviePlayer from "./MoviePlayer";
import useMovieDetails from "../hooks/useMovieDetails";
import useSelectedMovieTrailer from "../hooks/useSelectedMovieTrailer";
import MovieList from './MovieList';
import { useSelector } from "react-redux";
import CastList from "./CastList";

const WatchMovie = () => {
const {movieId} = useParams();
useMovieDetails(movieId);
useSelectedMovieTrailer(movieId);
const navigate = useNavigate();

const recommandedMovies = useSelector((store)=> store.movies.topRatedMovies);

return( 
    <div className="bg-black py-10 px-20">
        <MoviePlayer/>
        <MovieInfo/>
        <CastList/>
        <MovieList title={"Recommanded"} movies={recommandedMovies}/>
    </div>
  )
}

export default WatchMovie;
