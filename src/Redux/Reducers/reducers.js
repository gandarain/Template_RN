import { INCREMENT_VALUE, DECREMENT_VALUE } from '../Actions/types'

const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch (action.type) {

    case INCREMENT_VALUE:
      return {
        ...state,
        value: state.value + 1
      }

    case DECREMENT_VALUE:
      return {
        ...state,
        value: state.value - 1
      }

    default:
      return state
  }
}