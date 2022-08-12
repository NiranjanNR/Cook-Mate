import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({ data }) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-3'>
            {data.map(it =>
                <div className='hover:rotate-3 duration-500 text-left m-3 my-4 pb-8 bg-slate-100 rounded-xl drop-shadow-xl p-3'>
                    <div className='text-3xl font-semibold m-2 mb-2'>{it.title}</div>
                    <div className='text-2xl text-gray-600 font-semibold m-2 mb-2'>{it.cookingTime} to make</div>
                    <div>{it.ingredients.map(i => <div>{i}</div>)}</div><br />
                    <div className='mb-3'>{it.method.substring(0,90)}...</div>
                    <Link className='text-white rounded-lg font-semibold px-3 py-2 bg-gray-700' to={`/recipes/${it.id}`} >Cook This</Link>
                </div>
            )}
        </div>

    )
}

export default RecipeList
