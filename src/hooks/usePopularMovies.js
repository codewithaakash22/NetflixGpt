import { API_OPTIONS } from '../utils/constants';
import { useDispatch,useSelector } from 'react-redux';
import {addPopularMovies} from '../utils/moviesSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const usePopularMovies = () =>{
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
   const navigate = useNavigate();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies  = async () =>{
    try{ 
    const data =  await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const json = await data.json();

        dispatch(addPopularMovies(json.results));
    }catch(error){ 
    console.error("Failed to fetch movie:", error);
    navigate("/error"); 
    }
    }

    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[]);
}

export default usePopularMovies;