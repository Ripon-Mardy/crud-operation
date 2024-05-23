import React from 'react'

const page = () => {
  return (
    <>
    <form className='flex flex-col gap-4'>
        <input className='border p-2 px-3 font-semibold'  type="text" placeholder='Topic title'  />
        <input className='border p-2 px-3 font-semibold' type="text" placeholder='Topic Description' />
        <button className='bg-emerald-600 p-2 text-white font-semibold w-fit rounded-sm'>Add Topic</button>
    </form>
    </>
  )
}

export default page
