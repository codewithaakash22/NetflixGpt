import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        selectedMovie: {
        details: null,
        credits: null,
        recommendedMovies: null,
        },
        selectedMovieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addMovieTrailer: (state, action) =>{
            state.movieTrailer = action.payload;
        },
        addSelectedMovie: (state, action) =>{
            state.selectedMovie = action.payload;
        },
        addSelectedMovieTrailer: (state, action) => {
            state.selectedMovieTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer,addPopularMovies, addTopRatedMovies, addUpcomingMovies, addSelectedMovie, addSelectedMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;