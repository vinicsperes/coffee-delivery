import { Minus, Plus } from 'phosphor-react'
import { Text } from '../../styles/themes/textRule'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <span>
        <p>
          <Minus size={14} weight="bold" />
        </p>
      </span>
      <Text size="m" color="title">
        1
      </Text>
      <span>
        <p>
          <Plus size={14} weight="bold" />
        </p>
      </span>
    </CounterContainer>
  )
}
