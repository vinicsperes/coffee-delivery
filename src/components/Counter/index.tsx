import { Minus, Plus } from 'phosphor-react'
import { Text } from '../../styles/themes/textRule'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function Counter({ quantity, onIncrease, onDecrease }: CounterProps) {
  return (
    <CounterContainer>
      <span>
        <button>
          <Minus onClick={onDecrease} size={14} weight="bold" />
        </button>
      </span>
      <Text size="m" color="title">
        {quantity}
      </Text>
      <span>
        <button>
          <Plus onClick={onIncrease} size={14} weight="bold" />
        </button>
      </span>
    </CounterContainer>
  )
}
