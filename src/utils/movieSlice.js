import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState:{},
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        removeNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = null;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        }
    }
});


export const {addNowPlayingMovies, removeNowPlayingMovies, addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;