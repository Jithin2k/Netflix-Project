import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-24 px-6 md:pt-36 md:px-12'>
      <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-4  text-base md:text-lg w-full md:w-3/4 lg:w-1/3'>{overview}</p>
      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <button className='cursor-pointer w-full sm:w-auto px-6 py-2 rounded-lg font-bold bg-white border text-black'>Play</button>
        <button className='cursor-pointer w-full sm:w-auto px-6 py-2 rounded-lg bg-gray-500 font-bold text-white '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
