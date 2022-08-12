import React, { } from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Home = () => {
    const url = 'http://localhost:3000/recipes'

    const { data, isPending, error } = useFetch(url)

    return (
        <div>
            <div>
                {isPending && <div className='text-center'>Loading..</div>}
                {error && <div>{error}</div>}
                {data && <RecipeList data={data}/>}
            </div>
        </div>
    )
}

export default Home