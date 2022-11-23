import { ReactNode } from 'react'
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
      <p className="regularM">{text}</p>
    </ItemGrid>
  )
}
