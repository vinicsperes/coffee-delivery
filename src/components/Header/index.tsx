import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderComponent, HeaderContainer } from './styles'
import { DefaultTheme } from '../../styles/themes/default'
import { useTheme } from 'styled-components'
import { Text } from '../../styles/themes/textRule'
import { NavLink } from 'react-router-dom'

export function Header() {
  const theme = useTheme() as DefaultTheme

  return (
    <HeaderComponent>
      <HeaderContainer>
        <NavLink to="/" title="Catálogo">
          <img src={logo} alt="Logotipo Coffee Delivery" />
        </NavLink>
        <div className="actions">
          <div className="location">
            <MapPin size={22} weight="fill" color={theme.palette.purple.main} />
            <Text size="s" color={theme.palette.purple.dark}>
              Joinville, SC
            </Text>
          </div>
          <NavLink to="/checkout" title="Checkout">
            <div className="cart">
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme.palette.yellow.dark}
              />
              <Text
                className="itemCounter"
                size="s"
                weight="bold"
                color={theme.palette.white}
              >
                3
              </Text>
            </div>
          </NavLink>
        </div>
      </HeaderContainer>
    </HeaderComponent>
  )
}
