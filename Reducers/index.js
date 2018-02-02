//The Root reducer. Combines all of our reducers together for a single export
import { combineReducers } from ‘redux’

export default combineReducers({
  hero,
  enemies,
  board
})
