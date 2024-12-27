import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    console.warn(movies.nowPlayingMovies);
  return (
    movies.nowPlayingMovies && (
   <div className = " bg-black ">
    <div className="-mt-52 pl-12 relative z-20">
        <MovieList title = "Now Playing" movies = {movies.nowPlayingMovies}></MovieList>
        <MovieList title = "Trending Movies" movies = {movies.trendingMovies}></MovieList>
        <MovieList title = "Popular Movies" movies = {movies.popularMovies}></MovieList>
        <MovieList title = "Trending TV Shows" movies = {movies.trendingTVShows}></MovieList>
    </div>
   

   </div>
  )
)
}

export default SecondaryContainer