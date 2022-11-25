import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Counter } from '../../../../components/Counter'
import { DefaultTheme } from '../../../../styles/themes/default'
import { Text, Title } from '../../../../styles/themes/textRule'
import { CardContainer, CoffeeTag, Description, Price } from './styles'

interface Coffee {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  price: number
}

interface CardCoffeeProps {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const theme = useTheme() as DefaultTheme
  return (
    <CardContainer>
      <img
        src={`../../../../src/assets/coffeeCardImage/${coffee.image}`}
        alt=""
      />
      <div className="tagList">
        {coffee.tags.map((tag) => {
          return (
            <CoffeeTag key={`${coffee.id}-${tag}`}>
              {tag.toUpperCase()}
            </CoffeeTag>
          )
        })}
      </div>
      <></>
      <Title size={'s'} weight={'bold'} color={theme.palette.base.subtitle}>
        {coffee.name}
      </Title>
      <Description>{coffee.description}</Description>
      <footer>
        <Text size={'s'}>R$</Text>
        <Price>{coffee.price.toFixed(2).toString().replace('.', ',')}</Price>

        <div className="actions">
          <Counter />
          <div className="cart">
            <ShoppingCart size={22} weight="fill" color={theme.palette.white} />
          </div>
        </div>
      </footer>
    </CardContainer>
  )
}
