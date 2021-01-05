const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return action.data.content
    default:
      return state
  }
}

export const setNotification = (content, displayTime) => {
  return async dispatch => {
    dispatch({ type: 'NOTIFY', data: { content } })
    setTimeout(() => {
      dispatch({ type: 'NOTIFY', data: { content: null } })
    }, displayTime*1000)
  }
}


export default notificationReducer