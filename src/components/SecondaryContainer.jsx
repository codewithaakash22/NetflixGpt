import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () =>{
    const movies = useSelector((store)=>store.movies);
    return((movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies) &&
        <div className="bg-black md:px-6">
            <div className="md:relative md:z-12 md:-mt-68 md:pl-12">
            <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
            </div>
            <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        </div>
    )
};

export default SecondaryContainer;