import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

    const {movieResults, movieNames} = useSelector(store => store.gpt);
     if(!movieNames){
        //handle error handelling
        return;
     }
  return (
    <div className="p-4 m-4 bg-black text-white ">
       { movieNames.length > 0 && movieNames.map((movie, index) => <MovieList key = {movie} title = {movie} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GptMovieSuggestions