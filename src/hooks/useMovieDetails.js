import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (movieId) =>{
   const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
      try {
        const [detailsRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS),
          fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS),
        ]);

        const [details, credits] = await Promise.all([
          detailsRes.json(),
          creditsRes.json(),
        ]);

        const movieData = {
          details,
          credits,
        };

        dispatch(addSelectedMovie(movieData));
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };
    
    fetchMovieData();
  }, [movieId, dispatch]);
   
}

export default useMovieDetails;