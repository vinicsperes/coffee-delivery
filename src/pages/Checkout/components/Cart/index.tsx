import { CardContent } from '../../styles'
import {
  CartContent,
  CoffeeSelected,
  ConfirmOrderButton,
  DeleteButton,
} from './styles'

import { coffees } from '../../../../data/coffeList'
import { Counter } from '../../../../components/Counter'
import { Text } from '../../../../styles/themes/textRule'
import { Trash } from 'phosphor-react'
import { DefaultTheme } from '../../../../styles/themes/default'
import { useTheme } from 'styled-components'
export function Cart() {
  const theme = useTheme() as DefaultTheme

  return (
    <CartContent>
      <CardContent>
        {coffees.slice(0, 3).map((coffee) => (
          <>
            <CoffeeSelected key={coffee.id}>
              <img
                src={`../../src/assets/coffeeCardImage/${coffee.image}`}
                alt=""
              />
              <div className="content">
                <Text color={'subtitle'}>{coffee.name}</Text>
                <div className="actions">
                  <Counter coffeeId={coffee.id} />
                  <DeleteButton>
                    <Trash size={16} color={theme.palette.purple.main} />
                    <p>REMOVER</p>
                  </DeleteButton>
                </div>
              </div>
              <Text size={'m'} weight={'bold'}>
                R$ {coffee.price.toFixed(2).toString().replace('.', ',')}
              </Text>
            </CoffeeSelected>
            <hr />
          </>
        ))}

        <div className="itemsPrice">
          <div>
            <Text size="s">Total de itens</Text>
            <Text size="m">R$ 19,20</Text>
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
              R$ 26,90
            </Text>
          </div>
        </div>

        <ConfirmOrderButton>
          <p>CONFIRMAR PEDIDO</p>
        </ConfirmOrderButton>
      </CardContent>
    </CartContent>
  )
}
