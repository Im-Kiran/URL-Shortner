import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-purple-950 p-3 text-amber-50 flex flex-row justify-between'>
        <div className='font-mono font-semibold font-stretch-ultra-expanded text-2xl'>MinLinks</div>
        <div>
            <ul className='flex flex-row gap-6'>
                <li><Link to='/viewLinks'><button className='bg-indigo-950 text-amber-50 px-4 py-2 rounded hover:bg-indigo-800 transition'>View Links</button></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar