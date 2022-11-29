import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListComponent, CoffeeListWrapper, OurCoffees } from './styles'
import { coffees } from '../../../../data/coffeList'
import { Title } from '../../../../styles/themes/textRule'

export function CoffeeList() {
  return (
    <CoffeeListComponent>
      <OurCoffees>
        <Title size="l" weight={'bold'} color={'subtitle'}>
          Nossos Cafés
        </Title>
        <CoffeeListWrapper>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListWrapper>
      </OurCoffees>
    </CoffeeListComponent>
  )
}
