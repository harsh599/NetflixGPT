import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'

//Creating custom hook to get data from TMDB api and add the movies to the movie store
const useTrendingMovies = ()=>{
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.popularMovies);

    const getTrendingMovies = async() =>{
        const data = await fetch ("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    };

    useEffect(()=>{
        !trendingMovies && getTrendingMovies();
    }, []);
}

export default useTrendingMovies;