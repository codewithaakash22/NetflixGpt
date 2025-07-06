import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addTopRatedMovies} from '../utils/moviesSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const useTopRatedMovies = () =>{
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMovies  = async () =>{
    try{ 
    const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }catch(error){ 
    console.error("Failed to fetch movie:", error);
    navigate("/error"); 
    }
    }

    useEffect(()=>{
        !topRatedMovies && getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;