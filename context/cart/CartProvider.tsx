import { useReducer } from 'react'
import { ICartProduct } from '@/interfaces'
import { CartContext, cartReducer } from './'

export interface CartProviderProps {
  children?: React.ReactNode
}

export interface CartState {
  cart: ICartProduct[]
}

const CART_INITIAL_STATE: CartState = {
  cart: []
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  const addProductToCart = (newProduct: ICartProduct) => {
    const currentProduct = state.cart.find(product =>
      product._id === newProduct._id && product.size === newProduct.size
    )

    if (!currentProduct) return dispatch({
      type: '[Cart] - Update products in cart',
      payload: [...state.cart, newProduct]
    })

    const updatedCart = state.cart.map(product => {
      if (
        product._id !== currentProduct._id ||
        product.size !== currentProduct.size
      )
        return product

      return {
        ...product,
        quantity: product.quantity + newProduct.quantity
      }
    })

    dispatch({type: '[Cart] - Update products in cart', payload: updatedCart})
  }

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
