import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GptSearch from './GptSearch';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },{
            path: "/browse",
            element: <Browse />,
        },{
            path: "/gpt-search",
            element: <GptSearch />,
        }
    ]);

  return (
    <div>
        <RouterProvider router = {appRouter}></RouterProvider>
    </div>
  )
}

export default Body