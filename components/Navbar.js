import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='py-3 bg-sky-900 flex items-center justify-between p-2 px-3 mt-4 rounded'>
        <Link className='font-bold text-white' href='/'>GRUD Operation</Link>
        <Link className=' font-semibold bg-white text-black p-1 rounded-sm' href='/addTopic'>Add topic</Link>
    </nav>
    </>
  )
}

export default Navbar
