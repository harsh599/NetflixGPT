import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingTVShows } from '../utils/movieSlice';
import { useEffect } from 'react'

//Creating custom hook to get data from TMDB api and add the movies to the movie store
const useTrendingTVShows = ()=>{
     const dispatch = useDispatch();
    const getTrendingTVShows = async() =>{
        const data = await fetch ("https://api.themoviedb.org/3/trending/tv/day?language=en-US", API_OPTIONS);
        const json = await data.json();
        console.warn("TV SHOWS");
        dispatch(addTrendingTVShows(json.results));
        console.log(json.results);
    };

    useEffect(()=>{
        getTrendingTVShows();
    }, []);
}

export default useTrendingTVShows;