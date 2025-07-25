import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgUrl } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute w-full h-full -z-10">
        <img
          className="object-cover w-full  h-full"
          src={bgUrl}
          alt="background image"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
