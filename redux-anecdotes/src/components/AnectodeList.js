import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnectodeList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector( ({ anectodes, filter }) => {
    return (
      anectodes.filter(
        a => a.content.toLowerCase().includes(filter.toLowerCase())
      )
    )
  })
  
  const newVote = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(setNotification('A vote has been cast', 5))
  }
  
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => newVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnectodeList