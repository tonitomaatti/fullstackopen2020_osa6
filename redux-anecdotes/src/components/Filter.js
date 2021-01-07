import React from 'react'
import { changeFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    props.changeFilter(event.target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={props.filterValue} onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filterValue: state.filter
  }
}

const mapDispatchToProps = {
  changeFilter
}


const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter