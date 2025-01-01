import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

     const {movieResults, movieNames} = useSelector(store => store.gpt);
    console.log(movieResults);
    console.log(movieNames);

     if(!movieNames){
        //handle error handelling
        return;
     }

  return (
    <div className="p-4 m-4 bg-black text-white ">
       {/* { movieResults.length > 0 && movieResults.map((movie) => <MovieList key = {movie.id} title = {movieNames} movies={movie}/>)} */}
       { movieNames.length > 0 && movieNames.map((movie, index) => <MovieList key = {movie} title = {movie} movies={movieResults[index]}/>)}

    </div>
  )
}

export default GptMovieSuggestions