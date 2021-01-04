import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anectodeReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anectodes: anectodeReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store