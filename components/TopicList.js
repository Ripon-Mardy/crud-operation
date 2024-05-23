import React from 'react'
import RemoveBtn from './RemoveBtn'

// === import react icons ===
import { FaEdit } from "react-icons/fa";

const TopicList = () => {
  return (
    <>
    <div className='flex items-center justify-between gap-4 border-gray-400 border rounded-sm mt-4 p-3'>
        <div>
            <h1 className='text-2xl font-bold'>Topic Title</h1>
            <div>Topic Description</div>
        </div>
        <div className='flex items-center gap-3'>
            <RemoveBtn/>
            <FaEdit className='text-xl' />
        </div>
    </div>
    </>
  )
}

export default TopicList
