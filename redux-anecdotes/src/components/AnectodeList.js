import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnectodeList = (props) => {
  
  const newVote = (anecdote) => {
    props.vote(anecdote)
    props.setNotification('A vote has been cast', 5)
  }
  
  return (
    <div>
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes.filter(
      a => a.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  }
}

const mapDispatchToProps = {
  vote,
  setNotification
}

const ConnectedAnectodeList = connect(
  mapStateToProps,
  mapDispatchToProps  
)(AnectodeList)

export default ConnectedAnectodeList