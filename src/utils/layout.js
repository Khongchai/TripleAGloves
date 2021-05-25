/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "@utils/theme"
import Navigation from "@organisms/navigation"
import Footer from "@organisms/footer"
import "./variables.css"
import { LanguageProvider } from "../multilang-data/multi-lang-context"

const GlobalStyle = createGlobalStyle`
html{
  overflow-x: hidden;
  cursor: url("illustrations/cursor/normal.png"), context-menu;
  &:active {
    cursor: url('illustrations/cursor/click.png'), auto;
}
body{
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-x: hidden;
}
}

 @media (min-width: 480px) {
  html {
    font-size: 90%; 
  }
}
@media (min-width: 600px) {
  html {
    font-size: 100%; 
  }
}
@media (min-width: 800px) {
  html {
    font-size: 125%;
  }
}
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <GlobalStyle />
        <Navigation />
        {children}
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
