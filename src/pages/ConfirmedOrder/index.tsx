import { Text, Title } from '../../styles/themes/textRule'
import { ConfirmedOrderContent, DeliveryInfo } from './style'
import DeliveryBike from '../../assets/DeliveryBike.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { DefaultTheme } from '../../styles/themes/default'
import { TextWithIcon } from '../Home/components/TextWithIcon'

export function ConfirmedOrder() {
  const theme = useTheme() as DefaultTheme

  return (
    <ConfirmedOrderContent>
      <Title size="l">Uhu! Pedido confirmado</Title>
      <Text size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </Text>

      <div className="wrapper">
        <DeliveryInfo>
          <TextWithIcon
            icon={
              <MapPin weight="fill" size={16} color={theme.palette.white} />
            }
            text="Entrega em Rua João Daniel Martinelli, 102"
            alt="Farrapos - Porto Alegre, RS"
            color={theme.palette.purple.main}
          />
          <TextWithIcon
            icon={<Timer weight="fill" size={16} color={theme.palette.white} />}
            text="Previsão de entrega"
            alt="20 min - 30 min"
            weight="bold"
            color={theme.palette.yellow.main}
          />
          <TextWithIcon
            icon={
              <CurrencyDollar
                weight="regular"
                size={16}
                color={theme.palette.white}
              />
            }
            text="Pagamento na entrega"
            alt="Cartão de Crédito"
            weight="bold"
            color={theme.palette.yellow.dark}
          />
        </DeliveryInfo>

        <img
          src={DeliveryBike}
          alt="Imagem de um homem entregando café em uma moto"
        />
      </div>
    </ConfirmedOrderContent>
  )
}
