import { combineReducers } from 'redux'
import valueReducers from './reducers'
import cartReducers from './cartReducer'

export default combineReducers({
  value: valueReducers,
  cart: cartReducers
})
