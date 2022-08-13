import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Searchbar = () => {

    const [term, setTerm] = useState('')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
        setTerm('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex'>
                <div className='mx-3 pt-2  text-xl'>
                    Search:
                </div>
                <label>
                    <div className='mx-3 ml-1 py-1 text-xl'>
                        <input value={term} required type='text' className='bg-white rounded-lg py-1 px-2 text-xl' placeholder='Search recipes..' onChange={(e) => { setTerm(e.target.value) }} />
                    </div>
                </label>
            </div>
        </form>
    )
}

export default Searchbar