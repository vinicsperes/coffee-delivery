import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'
import { DefaultTheme } from '../../../../styles/themes/default'
import { Text, Title } from '../../../../styles/themes/textRule'
import { CardContainer, CoffeeTag, Description, Price } from './styles'

export interface Coffee {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  const theme = useTheme() as DefaultTheme

  function handleIncrease() {
    setQuantity(quantity + 1)
  }

  function handleDecrease() {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    console.log(coffeeToAdd)
    addToCart(coffeeToAdd)
  }

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
      <Title size={'s'} weight={'bold'} color={'subtitle'}>
        {coffee.name}
      </Title>
      <Description>{coffee.description}</Description>
      <footer>
        <Text size={'s'}>R$</Text>
        <Price>{coffee.price.toFixed(2).toString().replace('.', ',')}</Price>

        <div className="actions">
          <Counter
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <button className="cartButton" onClick={handleAddToCart}>
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme.palette.white}
              alt="Adicionar ao carrinho"
            />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
