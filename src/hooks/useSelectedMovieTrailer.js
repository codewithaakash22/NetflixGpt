import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addSelectedMovieTrailer} from '../utils/moviesSlice';
import { useEffect } from "react";

export const useSelectedMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
  if (!movieId) return; // ✅ Prevents unnecessary call on first render
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
      dispatch(addSelectedMovieTrailer(trailer));

  };

  getMovieTrailer();

  },[movieId]);
}

export default useSelectedMovieTrailer;