import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
        moviesNames: null,
        moviesResults: null,
    },
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) =>{
            const {moviesResults, moviesNames} = action.payload;
            state.moviesNames = moviesNames;
            state.moviesResults = moviesResults;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult} = GptSlice.actions;
export default GptSlice.reducer;