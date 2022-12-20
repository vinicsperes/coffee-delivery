import { CardContent } from '../../styles'
import {
  CartContent,
  CoffeeSelected,
  ConfirmOrderButton,
  DeleteButton,
} from './styles'
import { Counter } from '../../../../components/Counter'
import { Text } from '../../../../styles/themes/textRule'
import { Trash } from 'phosphor-react'
import { DefaultTheme } from '../../../../styles/themes/default'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Cart() {
  const theme = useTheme() as DefaultTheme

  const {
    cartItems,
    deleteFromCart,
    addToCart,
    totalCoffeesPrice,
    decreaseCoffeInCart,
    totalPrice,
    coffeesInCartQuantity,
  } = useContext(CartContext)

  const isActive = coffeesInCartQuantity > 0 ? 'active' : ''

  function handleDeleteCoffee(coffeeId: number) {
    deleteFromCart(coffeeId)
  }

  return (
    <CartContent>
      <CardContent id="CartCardContent">
        {cartItems.map((coffee) => (
          <>
            <CoffeeSelected key={coffee.id}>
              <img
                src={`../../src/assets/coffeeCardImage/${coffee.image}`}
                alt=""
              />
              <div className="content">
                <Text color={'subtitle'}>{coffee.name}</Text>
                <div className="actions">
                  <Counter
                    quantity={coffee.quantity}
                    onIncrease={() => addToCart(coffee, true)}
                    onDecrease={() => decreaseCoffeInCart(coffee)}
                  />
                  <DeleteButton onClick={() => handleDeleteCoffee(coffee.id)}>
                    <Trash size={16} color={theme.palette.purple.main} />
                    <p>REMOVER</p>
                  </DeleteButton>
                </div>
              </div>
              <Text size={'m'} weight={'bold'}>
                R${' '}
                {(coffee.price * coffee.quantity)
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </Text>
            </CoffeeSelected>
            <hr />
          </>
        ))}
        <div className="itemsPrice">
          <div>
            <Text size="s">Total de itens</Text>
            <Text size="m">R$ {totalCoffeesPrice}</Text>
          </div>
          <div>
            <Text size="s">Entrega</Text>
            <Text size="m">R$ 7,70</Text>
          </div>
          <div>
            <Text size="l" weight="bold" color="subtitle">
              Total
            </Text>
            <Text size="l" weight="bold" color="subtitle">
              R$ {totalPrice}
            </Text>
          </div>
          <ConfirmOrderButton clickble={isActive} form="addressForm">
            <p>CONFIRMAR PEDIDO</p>
          </ConfirmOrderButton>
        </div>
      </CardContent>
    </CartContent>
  )
}
