import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () =>{
    const movies = useSelector((store)=>store.movies);
    return((movies.nowPlayingMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies) &&
        <div className="bg-black px-6">
            <div className="relative z-12 -mt-56 pl-12">
            <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
            </div>
            <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        </div>
    )
};

export default SecondaryContainer;