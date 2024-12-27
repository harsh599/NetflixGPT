import React, { useEffect } from 'react'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTrendingTVShows from '../hooks/useTrendingTVShows';



const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useTrendingTVShows();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer / >
    </div>
  )
};

export default Browse