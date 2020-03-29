/* eslint-disable indent */
import { ADD_PRODUCT, UPDATE_PRODUCT, REDUCE_PRODUCT, REMOVE_PRODUCT } from '../Actions/types'

const initialState = {
  cart: {
    product: [],
    total: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          product: [...state.cart.product, action.payload],
          total: state.cart.total + action.payload.harga
        }
      }

    case UPDATE_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          product: state.cart.product.map(
            item => item.id === action.payload.id ? { ...item, jumlah: item.jumlah + 1 } : item
          ),
          total: state.cart.total + action.payload.harga
        }
      }

    case REDUCE_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          product: state.cart.product.map(
            item => item.id === action.payload.id ? { ...item, jumlah: item.jumlah - 1 } : item
          ),
          total: state.cart.total - action.payload.harga
        }
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          product: state.cart.product.filter(item => item.id !== action.payload.id),
          total: state.cart.total - action.payload.harga
        }
      }

    default:
      return state
  }
}