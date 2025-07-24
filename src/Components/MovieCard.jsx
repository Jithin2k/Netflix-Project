import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 rounded-lg '>
      <img className='rounded-lg hover:scale-110 transition-all duration-200 cursor-pointer' src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  )
}

export default MovieCard
