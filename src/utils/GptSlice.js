import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
        moviesNames: null,
        moviesResults: null,
        loading: false,
    },
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) =>{
            const {moviesResults, moviesNames} = action.payload;
            state.moviesNames = moviesNames;
            state.moviesResults = moviesResults;
            state.loading = false;
        },
        setGptLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult, setGptLoading} = GptSlice.actions;
export default GptSlice.reducer;