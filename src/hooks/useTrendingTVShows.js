import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingTVShows } from '../utils/movieSlice';
import { useEffect } from 'react'

//Creating custom hook to get data from TMDB api and add the movies to the movie store
const useTrendingTVShows = ()=>{
    const dispatch = useDispatch();
    const trendingTVShows = useSelector(store => store.movies.popularMovies);

    const getTrendingTVShows = async() =>{
        const data = await fetch ("https://api.themoviedb.org/3/trending/tv/day?language=en-US", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingTVShows(json.results));
    };

    useEffect(()=>{
        !trendingTVShows && getTrendingTVShows();
    }, []);
}

export default useTrendingTVShows;