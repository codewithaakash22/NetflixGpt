import MovieList from "../movies/MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () =>{
    const movies = useSelector((store)=>store.movies);
    const isLoading = !(
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.topRatedMovies &&
    movies.upcomingMovies
  );


    return(
        <div className="bg-black md:px-6 w-full">
            <div className="md:relative md:z-12 lg:-mt-40 md:pl-12">
            <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} isLoading={isLoading}/>
            </div>
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} isLoading={isLoading}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} isLoading={isLoading}/>
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} isLoading={isLoading}/>
        </div>
    )
};

export default SecondaryContainer;