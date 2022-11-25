import styled from 'styled-components'

interface TitleProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: string | number
  color?: string
}

interface TextProps {
  size?: 'l' | 'm' | 's'
  weight?: string | number
  color?: string
}

export const Title = styled.h1<TitleProps>`
  line-height: 130%;

  font-weight: ${({ weight }) => weight ?? 800};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.baloo};

  color: ${({ theme, color }) => theme.palette.base[`${color ?? 'title'}`]};
`
export const Text = styled.p<TextProps>`
  line-height: 130%;

  font-weight: ${({ weight }) => weight ?? 400};
  font-size: ${({ theme, size, weight }) =>
    theme.textSizes[`text-${weight ?? 'regular'}-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.palette.base[`${color ?? 'text'}`]};
`
