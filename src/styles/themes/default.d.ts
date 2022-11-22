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
}
