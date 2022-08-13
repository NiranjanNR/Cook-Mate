import React from 'react'
import './Nav.css'
import Searchbar from '../Searchbar'

import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>
            <nav className='xl:px-48 p-3 rounded-xl sm:flex mb-3'>
                <div className='px-3 flex'>
                    <Link to='/' className='pt-1 font-semibold text-3xl'>Cook</Link><Link to='/' className='pt-1 text-green-700 font-semibold text-3xl'>Mate</Link>
                </div>
                <div className='ml-auto md:flex items-center sm:mt-0 mt-4'>
                <Searchbar />
                <div className='md:mx-0 md:my-0 mx-20 my-2'>
                <Link to="/create" className='flex md:px-4 py-3 md:py-3 md:ml-0 ml-auto justify-center text-black font-semibold bg-white rounded-lg items-center text-xl'>
                    Create Recipe
                </Link>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav