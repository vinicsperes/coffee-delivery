import 'styled-components'

interface IPalette {
  main: string
  dark: string
  light: string
}

export interface DefaultTheme {
  palette: {
    base: {
      title: string
      subtitle: string
      text: string
      label: string
      hover: string
      button: string
      input: string
      card: string
    }
    yellow: IPalette
    purple: IPalette

    background: string
    white: string
  }
  textSizes: {
    'title-title-xl': string
    'title-title-l': string
    'title-title-m': string
    'title-title-s': string
    'title-title-xs': string
    'text-regular-l': string
    'text-bold-l': string
    'text-regular-m': string
    'text-bold-m': string
    'text-regular-s': string
    'text-bold-s': string
    'components-tag': string
    'components-button-g': string
    'components-button-s': string
  }
  fonts: {
    roboto: string
    baloo: string
  }
}
