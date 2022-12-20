import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

import produce from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  totalPrice: string
  totalCoffeesPrice: string
  coffeesInCartQuantity: number
  addToCart: (cooffee: CartItem, increase?: boolean) => void
  decreaseCoffeInCart: (coffee: CartItem) => void
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

  const coffeesInCartPrice = cartItems.reduce(
    (prevVal, coffee) => (prevVal += coffee.price * coffee.quantity),
    0,
  )

  const totalPrice = (coffeesInCartPrice + 7.7)
    .toFixed(2)
    .toString()
    .replace('.', ',')

  const totalCoffeesPrice = coffeesInCartPrice
    .toFixed(2)
    .toString()
    .replace('.', ',')

  function addToCart(coffee: CartItem, increase?: boolean) {
    setCartItems(
      produce((draft) => {
        const find = draft.find((find) => find.id === coffee.id)
        if (find) {
          if (increase) {
            find.quantity = coffee.quantity + 1
          } else {
            find.quantity = coffee.quantity
          }
        } else {
          draft.push(coffee)
        }
      }),
    )
  }

  function decreaseCoffeInCart(coffee: CartItem) {
    setCartItems(
      produce((draft) => {
        const find = draft.find((find) => find.id === coffee.id)
        if (find!.quantity > 1) {
          find!.quantity = coffee.quantity - 1
        } else {
          deleteFromCart(coffee.id)
        }
      }),
    )
  }

  function deleteFromCart(coffeeId: number) {
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
        totalPrice,
        totalCoffeesPrice,
        addToCart,
        deleteFromCart,
        coffeesInCartQuantity,
        decreaseCoffeInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
