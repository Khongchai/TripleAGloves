import PropTypes from "prop-types"
import React from "react"
import Logo from "@atoms/logo"
import styled from "styled-components"
import { NavLinksDesktop, NavLinksMobile } from "@molecules/NavLinks"
import Link from "@atoms/link"

const Navigation = ({ siteTitle }) => {
  return (
    <Nav className="nav-bar">
      <LogoLinkLeft id="landing-page-nav" to="/">
        <Logo />
      </LogoLinkLeft>
      <NavLinksDesktop />
      <NavLinksMobile />
      <LogoLinkRight id="landing-page-nav" to="/">
        <Logo />
      </LogoLinkRight>
    </Nav>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative;
  top: 0;
  width: 100vw;
  z-index: 1000;
  flex-wrap: wrap;
`

const LogoLinkRight = styled(Link)`
  margin-left: auto;
  position: relative;
  z-index: -1;
  @media only screen and (max-width: 800px) {
    display: block;
  }
  @media only screen and (min-width: 801px) {
    display: none;
  }
`
const LogoLinkLeft = styled(Link)`
  margin-right: auto;
  @media only screen and (max-width: 800px) {
    display: none;
  }
  @media only screen and (min-width: 801px) {
    display: block;
  }
`
