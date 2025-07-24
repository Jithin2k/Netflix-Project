import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-24 px-6 md:pt-[20%] md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video '>
      <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
      <p className='py-4  text-base md:text-lg w-full md:w-1/4 lg:w-2/5'>{overview}</p>
      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <button className='cursor-pointer w-full sm:w-auto px-6 py-2 rounded-lg font-bold bg-white border text-black'>Play</button>
        <button className='cursor-pointer w-full sm:w-auto px-6 py-2 rounded-lg bg-gray-500 font-bold text-white '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
