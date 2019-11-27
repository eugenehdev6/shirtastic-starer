import React, { createContext, useContext, useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCart = [...state.cart]
      if (newCart.findIndex(item => item.items.productId === action.payload.items.productId) === -1) {
        newCart.push(action.payload)
        return { ...state, cart: newCart }
      }
      return { ...state, cart: newCart }
    case SET_CATEGORY:
      return { ...state, category: action.payload }
    default:
      return state
  }
}

export const StateContext = createContext([{ cart: [] }])
export const StateProvider = ({ children }) => {
  const initialState = {
    cart: [],
    category: 0,
  }
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
}

export const ADD_TO_CART = "ADD_TO_CART"
export const SET_CATEGORY = "SET_CATEGORY"

export const useStateValue = () => useContext(StateContext)
