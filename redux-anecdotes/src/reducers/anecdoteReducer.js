const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const sortByLikes = (a1, a2) => {
  return a2.votes - a1.votes
}

const initialState = anecdotesAtStart.map(asObject)

const anectodeReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anectodeToChange =  state.find(a => a.id === id )
      const changedAnectode = {
        ...anectodeToChange,
        votes: anectodeToChange.votes + 1
      }
      return state.map(anectode =>
        anectode.id !== id ? anectode : changedAnectode 
      ).sort(sortByLikes)
    case 'NEW_ANECTODE':
      return state.concat(action.data).sort(sortByLikes)
    case 'INIT_ANECTODES':
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = (anectodes) => {
  return {
    type: 'INIT_ANECTODES',
    data: anectodes
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECTODE',
    data
  }
}

export default anectodeReducer