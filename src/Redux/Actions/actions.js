import { INCREMENT_VALUE, DECREMENT_VALUE, ADD_PRODUCT, UPDATE_PRODUCT, REDUCE_PRODUCT, REMOVE_PRODUCT } from './types'

export const incrementValue = () => ({
  type: INCREMENT_VALUE,
})

export const decrementValue = () => ({
  type: DECREMENT_VALUE,
})

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload
})

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload
})

export const reduceProduct = (payload) => ({
  type: REDUCE_PRODUCT,
  payload
})

export const removeProduct = (payload) => ({
  type: REMOVE_PRODUCT,
  payload
})