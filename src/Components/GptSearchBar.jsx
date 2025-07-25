import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center pt-[10%]'>
      <form className='w-1/2 bg-black grid grid-cols-12 text-white gap-4 p-3 rounded-2xl'>
        <input className='px-6 py-3  border rounded-lg col-span-9' type="text" placeholder='What would you like to Binge?'/>
        <button className='py-2 px-4  bg-red-500 col-span-3 text-white font-semibold rounded-lg'>Search</button>

      </form>
    </div>
  )
}

export default GptSearchBar
