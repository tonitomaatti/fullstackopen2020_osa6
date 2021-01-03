import React from 'react'

import { useDispatch } from 'react-redux'
import { createAnectode } from '../reducers/anecdoteReducer'

const AnectodeForm = (props) => {
  const dispatch = useDispatch()

  const newAnectode = (event) => {
    event.preventDefault()
    const content = event.target.anectode.value
    event.target.anectode.value = ''
    dispatch(createAnectode(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnectode}>
        <div><input name="anectode" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnectodeForm