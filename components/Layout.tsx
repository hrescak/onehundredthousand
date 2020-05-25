import * as React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme= {
  colors: {
    background: '#000000',
    text: '#ffffff',
    accent: '#0070f3',
  },
  fontFamily:  `'Inter', -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif`,
  breakpoints:{
    xl:'1400px',
    l:'1000px',
    m:'750px',
    s:'400px'
  }
}

const GlobalStyle = createGlobalStyle`
  @import 'https://rsms.me/inter/inter.css';
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fontFamily};
    padding: 0;
    margin: 0;
    width:100%;
  }
`

type Props = {
  title?: string
}

const Wrapper = styled.div`
  padding: 2rem;
`

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Wrapper>
    <GlobalStyle/>
  </ThemeProvider>
)

export default Layout
