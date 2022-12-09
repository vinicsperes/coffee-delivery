import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListComponent, CoffeeListWrapper, OurCoffees } from './styles'
import { coffees } from '../../../../data/coffeeList'
import { Title } from '../../../../styles/themes/textRule'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

export function CoffeeList() {
  const { cartItems } = useContext(CartContext)

  return (
    <CoffeeListComponent>
      <OurCoffees>
        <Title size="l" weight={'bold'} color={'subtitle'}>
          Nossos Cafés
        </Title>
        <CoffeeListWrapper>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} cartItems={cartItems} />
          ))}
        </CoffeeListWrapper>
      </OurCoffees>
    </CoffeeListComponent>
  )
}
