import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const useNowPlayingMovies = () =>{
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
   const navigate = useNavigate();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies  = async () =>{
    try{
    const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
    }catch (error) {
    console.error("Failed to fetch movies:", error);
    navigate("/error"); 
    }
    }

    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;