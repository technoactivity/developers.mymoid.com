import * as React from 'react'
import { theme, ComponentsProvider, useConfig } from 'docz'
import { ThemeProvider } from 'styled-components'

import { config } from './config'
import { mq, breakpoints } from './styles/responsive'
import { Global } from './styles/global'
import { Main } from './components/shared'
import * as components from './components/ui'

// https://www.gatsbyjs.org/docs/debugging-html-builds/
if (typeof window !== `undefined`) {
  const webfont = require("webfontloader")

  webfont.load({
    google: {
      families: ['Inconsolata', 'Zilla Slab:300,400,600'],
    },
  })
}

const map = {
  page: components.Page,
  loading: components.Loading,
  h1: components.H1,
  h2: components.H2,
  h3: components.H3,
  h4: components.H4,
  h5: components.H5,
  h6: components.H6,
  hr: components.Hr,
  img: components.Image,
  ul: components.List,
  pre: components.Pre,
  inlineCode: components.Code,
  blockquote: components.Blockquote,
}

const Theme: React.SFC = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={{ ...config.themeConfig, mq, breakpoints }}>
      <ComponentsProvider components={map}>
        <Main>
          <Global />
          {children}
        </Main>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export default theme(config)(Theme)
