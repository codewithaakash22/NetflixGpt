import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addMovieTrailer} from '../utils/moviesSlice';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useMovieTrailer = (movieId) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store => store.movies.movieTrailer);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const Videos = await data.json();

    const filteredData = Videos?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filteredData.length
      ? filteredData[0]
      : Videos?.results[0];

      // console.log(trailer);
      dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  },[]);
}

export default useMovieTrailer;