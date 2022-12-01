import { ReactNode } from 'react'
import { Text } from '../../../../styles/themes/textRule'
import { ItemGrid, IconCircle } from './styles'

interface textWithIconProps {
  icon: ReactNode
  text: string
  color: string
  alt?: string
  weight?: string
}

export function TextWithIcon({
  icon,
  text,
  color,
  alt,
  weight,
}: textWithIconProps) {
  return (
    <ItemGrid>
      <IconCircle variant={color}>{icon}</IconCircle>
      <div className="wrapper">
        <Text size="m">{text}</Text>
        <Text size="m" weight={weight}>
          {alt}
        </Text>
      </div>
    </ItemGrid>
  )
}
