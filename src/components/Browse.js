import React, { useEffect } from 'react'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';



const Browse = () => {
   
  return (
    <>
     <Header/>
    {/*
        Main Movie Container
            - Video Background
            - Video Title

        Secondary Container
        - Movie List * n
        -
    
    */}

    <MainContainer/>
    <SecondaryContainer / >
    <div>Browse</div>
    </>
   
  )
}

export default Browse