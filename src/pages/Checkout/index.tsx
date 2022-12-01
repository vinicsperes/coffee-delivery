import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { InputContent } from '../../components/FormInput/styles'
import { DefaultTheme } from '../../styles/themes/default'
import { Title, Text } from '../../styles/themes/textRule'
import {
  CardContent,
  CheckoutComponent,
  CoffeeSelected,
  ConfirmOrderButton,
  DeleteButton,
  InfoSection,
  SelectPaymentMethod,
} from './styles'
import { coffees } from '../../data/coffeList'
import { Counter } from '../../components/Counter'

export function Checkout() {
  const theme = useTheme() as DefaultTheme

  return (
    <CheckoutComponent>
      <div>
        <Title size="xs" color="subtitle">
          Complete seu pedido
        </Title>
        <CardContent>
          <InfoSection>
            <div>
              <MapPinLine size={22} color={theme.palette.yellow.dark} />
            </div>
            <div>
              <Text size="m" color="subtitle">
                Endereço de Entrega
              </Text>
              <Text size="s" color="text">
                Informe o endereço onde deseja receber seu pedido
              </Text>
            </div>
          </InfoSection>
          <form>
            <div className="wrapper">
              <div className="row">
                <InputContent placeholder="CEP" />
              </div>
              <div className="row second">
                <InputContent placeholder="Rua" />
              </div>
              <div className="row third">
                <InputContent placeholder="Número" />
                <InputContent className="caralho" placeholder="Complemento" />
              </div>
              <div className="row fourth">
                <InputContent placeholder="Bairro" />
                <InputContent placeholder="Cidade" />
                <InputContent placeholder="UF" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardContent>
          <InfoSection>
            <div>
              <CurrencyDollar
                size={22}
                color={theme.palette.purple.main}
              ></CurrencyDollar>
            </div>
            <div>
              <Text size="m" color="subtitle">
                Pagamento
              </Text>
              <Text size="s" color="text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </div>
          </InfoSection>
          <SelectPaymentMethod>
            <button>
              <CreditCard size={16} color={theme.palette.purple.main} />
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button>
              <Bank size={16} color={theme.palette.purple.main} />
              <p>CARTÃO DE DÉBITO</p>
            </button>
            <button>
              <Money size={16} color={theme.palette.purple.main} />
              <p>DINHEIRO</p>
            </button>
          </SelectPaymentMethod>
        </CardContent>
      </div>
      <div>
        <Title size="xs" color="subtitle">
          Cafés selecionados
        </Title>

        <CardContent>
          {coffees.slice(0, 3).map((coffee) => (
            <>
              <CoffeeSelected key={coffee.id}>
                <img
                  src={`../../src/assets/coffeeCardImage/${coffee.image}`}
                  alt=""
                />
                <div className="content">
                  <Text color={'subtitle'}>{coffee.name}</Text>
                  <div className="actions">
                    <Counter />
                    <DeleteButton>
                      <Trash size={16} color={theme.palette.purple.main} />
                      <p>REMOVER</p>
                    </DeleteButton>
                  </div>
                </div>
                <Text size={'m'} weight={'bold'}>
                  R$ {coffee.price.toFixed(2).toString().replace('.', ',')}
                </Text>
              </CoffeeSelected>
              <hr />
            </>
          ))}

          <div className="itemsPrice">
            <div>
              <Text size="s">Total de itens</Text>
              <Text size="m">R$ 19,20</Text>
            </div>
            <div>
              <Text size="s">Entrega</Text>
              <Text size="m">R$ 7,70</Text>
            </div>
            <div>
              <Text size="l" weight="bold" color="subtitle">
                Total
              </Text>
              <Text size="l" weight="bold" color="subtitle">
                R$ 26,90
              </Text>
            </div>
          </div>

          <ConfirmOrderButton>
            <p>CONFIRMAR PEDIDO</p>
          </ConfirmOrderButton>
        </CardContent>
      </div>
    </CheckoutComponent>
  )
}
