import React from 'react'
import { changeFilter } from '../reducers/filterReducer'
import { useSelector, useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  const filterValue = useSelector(state => state.filter)

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={filterValue} onChange={handleChange} />
    </div>
  )
}

export default Filter