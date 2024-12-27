import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';


const Body = () => {
    useNowPlayingMovies();// Calling custom hook
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
         {
            path: "/browse",
            element: <Browse />,
        }
    ]);

  return (
    <div>
        <RouterProvider router = {appRouter}></RouterProvider>
    </div>
  )
}

export default Body