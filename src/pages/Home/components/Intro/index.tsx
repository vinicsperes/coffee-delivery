import { IntroArticle, ItemList } from './styles'
import introArt from '../../../../assets/introArt.png'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { DefaultTheme } from '../../../../styles/themes/default'
import { TextWithIcon } from '../TextWithIcon'
import { Text, Title } from '../../../../styles/themes/textRule'

export function Intro() {
  const theme = useTheme() as DefaultTheme

  return (
    <IntroArticle>
      <div className="container">
        <div className="info">
          <div className="title">
            <Title size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </Title>

            <Text size="l" color={'subtitle'}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
          </div>

          <ItemList>
            <TextWithIcon
              icon={
                <ShoppingCart
                  weight="fill"
                  size={16}
                  color={theme.palette.white}
                />
              }
              text="Compra simples e segura"
              color={theme.palette.yellow.dark}
            />
            <TextWithIcon
              icon={
                <Package weight="fill" size={16} color={theme.palette.white} />
              }
              color={theme.palette.base.text}
              text="Embalagem mantém o café intacto"
            />
            <TextWithIcon
              icon={
                <Timer weight="fill" size={16} color={theme.palette.white} />
              }
              text="Entrega rápida e rastreada"
              color={theme.palette.yellow.main}
            />
            <TextWithIcon
              icon={
                <Coffee weight="fill" size={16} color={theme.palette.white} />
              }
              text="O café chega fresquinho até você"
              color={theme.palette.purple.main}
            />
          </ItemList>
        </div>

        <img src={introArt} alt="" />
      </div>
    </IntroArticle>
  )
}
