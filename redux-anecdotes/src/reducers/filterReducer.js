const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WRITE':
      return action.data.value
    default:
      return state
  }
}

export const changeFilter = (value) => {
  return {
    type: 'WRITE',
    data: { value }
  }
}

export default filterReducer