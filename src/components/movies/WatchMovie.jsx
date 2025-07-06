import {useNavigate, useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import MoviePlayer from "./MoviePlayer";
import useMovieDetails from "../../hooks/useMovieDetails";
import useSelectedMovieTrailer from "../../hooks/useSelectedMovieTrailer";
import MovieList from './MovieList';
import { useSelector } from "react-redux";
import CastList from "./CastList";
import { useEffect } from "react";

const WatchMovie = () => {
const {movieId} = useParams();
useMovieDetails(movieId);
useSelectedMovieTrailer(movieId);
const user = useSelector((store)=>store.user);
const navigate = useNavigate();

const recommandedMovies = useSelector((store)=> store.movies.popularMovies);
const selectedMovie = useSelector((store) => store.movies.selectedMovie);
const selectedMovieTrailer = useSelector((store) => store.movies.selectedMovieTrailer);
const isLoading = !selectedMovie || !selectedMovieTrailer;

useEffect(()=>{
  
  if(!user){
    navigate("/");
  }
},[user]);

return( 
    <div className="bg-black pt-20 md:py-10 md:px-20 pb-10">
        <MoviePlayer/>
        <MovieInfo/>
        <CastList isLoading={isLoading}/>
        <MovieList title={"More like this"} movies={recommandedMovies} isLoading={isLoading}/>
    </div>
  )
}

export default WatchMovie;
