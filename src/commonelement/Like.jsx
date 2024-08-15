import React from 'react'
import { FaRegStar } from "react-icons/fa";
function Like() {
  return (
    <div className='flex items-center justify-center outline outline-1 w-40 mx-auto mt-24 rounded-sm outline-blue-400'>
      <a rel="noreferrer" target='_blank' href="https://github.com/rko0211/Coding-Profile-Visualizer" className='p-1 flex gap-1 justify-center items-center font-semibold w-1/2 border-r-1 border-r-blue-400 bg-slate-50 hover:bg-gray-200'>
        <FaRegStar className='font-semibold' /> Star
      </a>
      <a rel="noreferrer" target='_blank' href="https://github.com/rko0211/Coding-Profile-Visualizer" className='p-1 flex gap-1 justify-center items-center font-semibold w-1/2 hover:text-blue-700'>
        1,999
      </a>
    </div>
  )
}

export default Like