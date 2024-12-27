import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

//Creating custom hook to get data from TMDB api and add the movies to the movie store
const useNowPlayingMovies = ()=>{
     const dispatch = useDispatch();
    const getNowPlayingMovies = async() =>{
        const data = await fetch ("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        console.log(json.results);
    };

    useEffect(()=>{
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;