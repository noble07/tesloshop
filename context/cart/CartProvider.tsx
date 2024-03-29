import { useEffect, useReducer } from 'react'
import Cookie from 'js-cookie'
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

  useEffect(() => {
    try {
      const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts })
    } catch (error) {
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] })
    }
  }, [])

  useEffect(() => {
    if (state.cart.length > 0) Cookie.set('cart', JSON.stringify(state.cart))
  }, [state.cart])

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

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Change cart quantity', payload: product })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addProductToCart,
        updateCartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
