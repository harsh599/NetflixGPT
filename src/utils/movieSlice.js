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
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies:(state, action)=>{
            state.trendingMovies = action.payload;
        },
         addTrendingTVShows:(state, action)=>{
            state.trendingTVShows = action.payload;
        },
    }
});


export const { addNowPlayingMovies, removeNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addTrendingTVShows} = moviesSlice.actions;
export default moviesSlice.reducer;