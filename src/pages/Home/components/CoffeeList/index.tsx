import { CardCoffee } from '../CoffeeCard'
import { CoffeeListWrapper, OurCoffees } from './style'
import { coffees } from '../../../../data/coffeList'
import { Title } from '../../../../styles/themes/textRule'

export function CoffeeList() {
  return (
    <OurCoffees>
      <Title size="l" weight={'bold'} color={'subtitle'}>
        Nossos Cafés
      </Title>
      <CoffeeListWrapper>
        {coffees.map((coffee) => (
          <CardCoffee key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListWrapper>
    </OurCoffees>
  )
}
