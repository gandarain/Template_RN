import { combineReducers } from 'redux'
import valueReducers from './reducers'

export default combineReducers({
  value: valueReducers,
})
