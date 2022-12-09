import { CardContent } from '../../styles'
import {
  CartContent,
  CoffeeSelected,
  ConfirmOrderButton,
  DeleteButton,
} from './styles'
import { Counter } from '../../../../components/Counter'
import { Text } from '../../../../styles/themes/textRule'
import { ArrowRight, Coffee, ShoppingCart, Trash } from 'phosphor-react'
import { DefaultTheme } from '../../../../styles/themes/default'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Cart() {
  const theme = useTheme() as DefaultTheme

  const {
    cartItems,
    coffeesInCartQuantity,
    totalCoffeesPrice,
    totalPrice,
  } = useContext(CartContext)

  function handleDeleteCoffee(coffeeId: number) {
    deleteFromCart(coffeeId)
  }

  const changeCartBackground =
    coffeesInCartQuantity === 0 ? 'purpleBackground' : ''

  return (
    <CartContent>
      <CardContent id="CartCardContent" className={changeCartBackground}>
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
                  <Counter quantity={coffee.quantity} />
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
        {coffeesInCartQuantity > 0 && (
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
            <ConfirmOrderButton>
              <p>CONFIRMAR PEDIDO</p>
            </ConfirmOrderButton>
          </div>
        )}
        {coffeesInCartQuantity === 0 && (
          <div className="emptyCardContent">
            <div className="iconWrapper">
              <Coffee size={64} weight="light" />
              <ArrowRight size={32} weight="bold" />
              <ShoppingCart size={64} weight="light" />
            </div>

            <Text size="m" color={'subtitle'}>
              Seu carrinho está vazio...
            </Text>
          </div>
        )}
      </CardContent>
    </CartContent>
  )
}
