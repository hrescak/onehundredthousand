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
  @media (max-width: ${p=>p.theme.breakpoints.l}) {
    padding: 1.5rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.m}) {
    padding: 1.2rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.s}) {
    padding: 1rem;
  }
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
        <meta name="description" content="Visualizing lives lost in coronavirus as american cities"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@mhrescak"/>
        <meta name="twitter:image" content="https://100000.city/meta/og-image.png"/>
        <meta name="twitter:description" content="Visualizing lives lost in coronavirus as american cities"/>
        <meta name="og:url" content="https://100000.city"/>
        <meta name="og:type" content="website"/>
        <meta name="og:title" content="100,000"/>
        <meta name="og:description" content="Visualizing lives lost in coronavirus as american cities"/>
        <meta name="og:image" content="/meta/og-image.png"/>
        <meta name="og:image:alt" content="Visualizing lives lost in coronavirus as american cities"/>
        <meta name="og:locale" content="en_US"/>
        <meta name="og:site_name" content="100000"/>
        <link rel="icon" href="/meta/icon.png"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      {children}
    </Wrapper>
    <GlobalStyle/>
    <script data-goatcounter="https://100000.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
  </ThemeProvider>
)

export default Layout
