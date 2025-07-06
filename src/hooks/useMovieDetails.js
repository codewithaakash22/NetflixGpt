import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useMovieDetails = (movieId) =>{
   const navigate = useNavigate();
   const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
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
      
    };
    
    fetchMovieData();
  }, [movieId, dispatch]);
   
}

export default useMovieDetails;