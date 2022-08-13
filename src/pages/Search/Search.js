import './Search.css'

import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Search = () => {

  const queryLocation = useLocation().search
  const queryParams = new URLSearchParams(queryLocation)
  const query = queryParams.get('q')

  const { data, isPending, error } = useFetch('http://localhost:3000/recipes?q=' + query)

  return (
    <div>
      {isPending && <div className='text-center'>Loading..</div>}
      {error && <div>{error}</div>}
      {data && <RecipeList data={data} /> }
    </div>
  )
}

export default Search