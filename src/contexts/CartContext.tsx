import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

import produce from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  coffeesInCartQuantity: number
  addToCart: (cooffee: CartItem) => void
  deleteFromCart: (cooffeeId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const coffeesInCartQuantity = cartItems.reduce(
    (prevVal, coffee) => (prevVal += coffee.quantity),
    0,
  )

  function addToCart(coffee: any) {
    setCartItems(
      produce((draft) => {
        const find = draft.find((find) => find.id === coffee.id)
        if (find) {
          find.quantity = coffee.quantity
        } else {
          draft.push(coffee)
        }
      }),
    )
    console.log('Item Adicionado ao carrinho')
  }

  function deleteFromCart(coffeeId: number) {
    console.log('deletando o id -> ' + coffeeId)
    setCartItems(
      produce((draft) => {
        const index = draft.findIndex((find) => find.id === coffeeId)
        if (index !== -1) draft.splice(index, 1)
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
        coffeesInCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
