import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import React from 'react'

const Recipe = () => {

  const { id } = useParams()

  const url = 'http://localhost:3000/recipes/' + id
  const { data, isPending, error } = useFetch(url)

  return (
    <div>
      {isPending && <div className='text-center'>Loading..</div>}
      {error && <div>{error}</div>}
      <div className='bg-slate-100 drop-shadow-lg rounded-xl p-10 text-xl m-4 '>
        {data && <div>
          <div className='text-center text-4xl mb-4 font-semibold'>{data.title}</div>
          <div className='text-2xl text-slate-500 mb-3'>Time it takes to cook - {data.cookingTime}</div>
          <div className='font-semibold text-2xl mb-4'>Ingredients : <br />{data.ingredients.map(it => <li className='font-normal text-xl mt-3'>{it}</li>)}</div>
          <div>
            <div className='mb-3 font-semibold'>Follow these steps to make a {data.title}:</div>
            {data.method}
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Recipe