import { ReactNode } from 'react'
import { Text } from '../../../../styles/themes/textRule'
import { ItemGrid, IconCircle } from './styles'

interface textWithIconProps {
  icon: ReactNode
  text: string
  color: string
}

export function TextWithIcon({ icon, text, color }: textWithIconProps) {
  return (
    <ItemGrid>
      <IconCircle variant={color}>{icon}</IconCircle>
      <Text size="m">{text}</Text>
    </ItemGrid>
  )
}
