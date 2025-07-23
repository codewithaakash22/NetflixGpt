import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
        searchQuery: null,
        moviesResults: null,
        loading: false,
    },
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) =>{
            const {moviesResults, searchQuery} = action.payload;
            state.searchQuery = searchQuery;
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