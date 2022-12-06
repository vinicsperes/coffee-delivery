import { Minus, Plus } from 'phosphor-react'
import { Text } from '../../styles/themes/textRule'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <span>
        <button>
          <Minus size={14} weight="bold" />
        </button>
      </span>
      <Text size="m" color="title">
        {0}
      </Text>
      <span>
        <button>
          <Plus size={14} weight="bold" />
        </button>
      </span>
    </CounterContainer>
  )
}
