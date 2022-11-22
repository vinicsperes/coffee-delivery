import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { DefaultTheme } from '../../styles/themes/default'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme() as DefaultTheme

  return (
    <HeaderContainer>
      <img src={logo} alt="Logotipo Coffee Delivery" />

      <div className="actions">
        <div className="location">
          <MapPin size={22} weight="fill" color={theme.palette.purple.main} />
          <p>Joinville, SC</p>
        </div>
        <div className="cart">
          <ShoppingCart
            size={22}
            weight="fill"
            color={theme.palette.yellow.dark}
          />
          <span>3</span>
        </div>
      </div>
    </HeaderContainer>
  )
}
