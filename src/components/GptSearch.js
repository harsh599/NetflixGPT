import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img src={NETFLIX_BACKGROUND_IMAGE}
        className = "" 
        alt = "Netflix_Background_Image"
      />
    </div>
    <div className="">
      <GptSearchBar/>
      <GptMovieSuggestions />
    </div>
    </>
    
  )
}

export default GptSearch