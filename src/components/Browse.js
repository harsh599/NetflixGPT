import React, { useEffect } from 'react'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTrendingTVShows from '../hooks/useTrendingTVShows';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useTrendingTVShows();
  return (
    <div>
      <Header/>
      {showGptSearch ? (<GptSearch/>) : (<> 
        <MainContainer/>
        <SecondaryContainer / >
        </>)}
    </div>
  )
};

export default Browse