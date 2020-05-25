import 'styled-components'

export type City = {
  name: string
  population: number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      text: string
      accent: string
    }
    fontFamily: string,
    breakpoints:{
      xl: string
      l: string
      m: string
      s: string
    }
  }
}