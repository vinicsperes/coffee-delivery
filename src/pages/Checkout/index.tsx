import { useForm, SubmitHandler } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { InputContent } from '../../components/FormInput/styles'
import { DefaultTheme } from '../../styles/themes/default'
import { Title, Text } from '../../styles/themes/textRule'
import {
  CardContent,
  CheckoutComponent,
  InfoSection,
  SelectPaymentMethod,
} from './styles'

import { Cart } from './components/Cart'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { CartContext } from '../../contexts/CartContext'

type FormValues = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estado: string
}

const addressFormValidationSchema = z.object({
  cep: z.string().length(9, 'Informe o seu CEP'),
  rua: z.string().min(6, 'Informe o nome da sua rua'),
  numero: z.string().min(2, 'Informe o número da sua casa'),
  bairro: z.string().min(3, 'Informe o seu bairro'),
  cidade: z.string().min(3, 'Informe a sua cidade'),
  estado: z.string().min(2, 'Informe a sigla do seu estado'),
})

export function Checkout() {
  const { emptyCart } = useContext(CartContext)

  const theme = useTheme() as DefaultTheme
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [errorBorder, setErrorBorder] = useState({ border: 'none' })

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = (address) => {
    if (paymentMethod) {
      emptyCart()
      navigate('/sucess', { state: { address, paymentMethod } })
    } else {
      setErrorBorder({
        border: '2px solid #8047F8',
      })
    }
  }

  function handleCepFormat(e: any) {
    e.target.value = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

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
          <form onSubmit={handleSubmit(onSubmit)} id="addressForm">
            <div className="wrapper">
              <div className="row">
                <InputContent
                  {...register('cep', { required: true })}
                  onChange={handleCepFormat}
                  placeholder="CEP"
                />
              </div>
              <div className="row second">
                <InputContent {...register('rua')} placeholder="Rua" />
              </div>
              <div className="row third">
                <InputContent
                  type="number"
                  {...register('numero')}
                  placeholder="Número"
                />
                <InputContent
                  {...register('complemento')}
                  placeholder="Complemento"
                />
              </div>
              <div className="row fourth">
                <InputContent {...register('bairro')} placeholder="Bairro" />
                <InputContent {...register('cidade')} placeholder="Cidade" />
                <InputContent {...register('estado')} placeholder="UF" />
              </div>
            </div>
          </form>
          <div>
            <Text size="s" color="error">
              {formState.errors.cep?.message ||
                formState.errors.rua?.message ||
                formState.errors.numero?.message ||
                formState.errors.bairro?.message ||
                formState.errors.cidade?.message ||
                formState.errors.estado?.message}
            </Text>
          </div>
        </CardContent>
        <CardContent style={errorBorder}>
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
            <button onClick={() => setPaymentMethod('Cartão de Crédito')}>
              <CreditCard size={16} color={theme.palette.purple.main} />
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button onClick={() => setPaymentMethod('Cartão de Débito')}>
              <Bank size={16} color={theme.palette.purple.main} />
              <p>CARTÃO DE DÉBITO</p>
            </button>
            <button onClick={() => setPaymentMethod('Dinheiro')}>
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

        <Cart />
      </div>
    </CheckoutComponent>
  )
}
