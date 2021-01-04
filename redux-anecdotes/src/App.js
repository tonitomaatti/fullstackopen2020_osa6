import React, { useEffect } from 'react'
import AnectodeForm from './components/AnectodeForm'
import AnectodeList from './components/AnectodeList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anectodeService from './services/anectodes'
import { initializeAnectodes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anectodeService
      .getAll().then(anectodes => dispatch(initializeAnectodes(anectodes)))
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnectodeList />
      <AnectodeForm />
    </div>
  )
}

export default App