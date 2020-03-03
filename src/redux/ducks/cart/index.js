// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_CART = "products/ADD_CART"
const DEL_CART = "products/DEL_CART"
const DEL_ALL = "products/DEL_ALL"

// 3. initial state
const initialState = {
  cart: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const exists =
        state.cart.filter(product => product.id === action.payload.id).length >
        0
      if (exists) {
        const thing = state.cart.find(item => item.id === action.payload.id)
        thing.quantity = thing.quantity + 1
        return {
          ...state,
          cart: state.cart.map(p => (thing.id === p.id ? thing : p))
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        }
      }

    case DEL_CART:
      if (state.cart.find(item => item.id === action.payload).quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        }
      } else {
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.id === action.payload) {
              item.quantity = item.quantity - 1
              return item
            } else {
              return item
            }
          })
        }
      }

    case DEL_ALL:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }

    default:
      return state
  }
}

// 5. Action creators
// add product to cart
function addToCart(product) {
  return {
    type: ADD_CART,
    payload: product
  }
}

// delete item from cart
function deleteItem(item) {
  return {
    type: DEL_CART,
    payload: item
  }
}

function deleteAllItems(item) {
  return {
    type: DEL_ALL,
    payload: item
  }
}

// 6. custom hook
export function useCart() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const add = product => dispatch(addToCart(product))
  const del = item => dispatch(deleteItem(item))
  const delAll = item => dispatch(deleteAllItems(item))
  const total = cart.reduce((a, b) => {
    return a + b.price * b.quantity
  }, 0)

  useEffect(() => {}, [dispatch])

  return { cart, add, del, total, delAll }
}
