import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

//Creating custom hook to get data from TMDB api and add the movies to the movie store
const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const getPopularMovies = async() =>{
        const data = await fetch ("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
        console.log(json.results);
    };

    useEffect(()=>{
        getPopularMovies();
    }, []);
}

export default usePopularMovies;