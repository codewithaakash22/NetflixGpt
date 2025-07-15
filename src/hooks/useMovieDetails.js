import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (movieId) =>{
   const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
        const [detailsRes, creditsRes, recommendationsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS),
          fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS),
          fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, API_OPTIONS),
        ]);

        const [details, credits, recommendedMovies] = await Promise.all([
          detailsRes.json(),
          creditsRes.json(),
          recommendationsRes.json()
        ]);

        const movieData = {
          details,
          credits,
          recommendedMovies,
        };

        dispatch(addSelectedMovie(movieData));
      
    };
    
    fetchMovieData();
  }, [movieId, dispatch]);
   
}

export default useMovieDetails;