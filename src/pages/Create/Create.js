import './Create.css'

import React, { useState } from 'react'

const Create = () => {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredient] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
  }

  const handleClickAdd = () => {
    if (newIngredient !== '') {
      setIngredient([...ingredients, newIngredient])
      setNewIngredient('')
      console.log(ingredients)
    }
  }

  return (
    <div className=''>
      <div className='lg:mx-56 bg-slate-100 text-center p-6 rounded-xl drop-shadow-xl'>
        <p className='text-4xl font-semibold'>Create Your Recipe</p>

        <form onSubmit={handleSubmit}>
          <label>
            <div className='text-xl mt-4'>
              <span>Enter Recipe Name : </span><input required value={title} type='text' className='text-xl rounded-md py-1 px-3' onChange={(e) => { setTitle(e.target.value) }} />
            </div>
          </label>

          <label>
            <div className='text-xl mt-4'>
              <span>Enter Cooking Time : </span><input required value={cookingTime} type='number' className='text-xl rounded-md py-1 px-3' onChange={(e) => { setCookingTime(e.target.value) }} />
            </div>
          </label>

          <label>
            <div className='text-xl mt-4 flex justify-center'>
              <div className='mt-1'>Enter Ingredients : <input value={newIngredient} required className='text-xl rounded-md py-1 px-3' onChange={(e) => { setNewIngredient(e.target.value) }} /></div>
              <div className='bg-slate-300 hover:bg-slate-400  text-4xl pb-1 pl-2 ml-3 rounded-lg pr-2 flex text-center'><button onClick={handleClickAdd}>+</button></div>
            </div>
          </label>

          <label>
            <div className='text-xl mt-5'>
              Enter Steps to make your dish <textarea required value={method} className='mt-3 inme text-xl rounded-md py-2 px-3' onChange={(e) => { setMethod(e.target.value) }} />
            </div>
          </label>

          <div className='text-xl mt-4'>
            <button className='bg-slate-300 text-2xl py-1 pl-4 pr-4 rounded-lg hover:bg-slate-400'>Create</button>
          </div>

        </form>
        {title}
        {cookingTime}
        {ingredients}
      </div>
    </div>
  )
}

export default Create