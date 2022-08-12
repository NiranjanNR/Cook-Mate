import React from 'react'
import './Nav.css'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className='xl:px-48 p-3 rounded-xl flex mb-3'>
                <div className='px-3 flex'>
                    <Link to='/' className='pt-1 font-semibold text-3xl'>Cook</Link><Link to='/' className='pt-1 text-green-700 font-semibold text-3xl'>Mate</Link>
                </div>
                <div className='mx-3 pt-2 ml-auto text-xl'>
                    Search:
                </div>
                <div className='mx-3 ml-1 py-1 text-xl'>
                    <input className='bg-white rounded-lg py-1 px-2 text-xl' placeholder='Search recipes..' />
                </div>
                <Link to="/create" className='flex px-4 text-black font-semibold bg-white rounded-lg items-center text-xl'>
                    Create Recipe
                </Link>
            </nav>
        </div>
    )
}

export default Nav