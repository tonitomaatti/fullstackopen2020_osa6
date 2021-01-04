const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return action.data.content
    default:
      return state
  }
}

export const notify = (content) => {
  return {
    type: 'NOTIFY',
    data: { content }
  }
}


export default notificationReducer