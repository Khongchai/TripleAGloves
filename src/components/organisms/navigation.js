import PropTypes from "prop-types"
import React from "react"
import Logo from "@atoms/logo"
import styled from "styled-components"
import { NavLinksDesktop, NavLinksMobile } from "@molecules/NavLinks"
import Link from "@atoms/link"

const Navigation = ({ siteTitle }) => {
  return (
    <Nav className="nav-bar">
      <LogoLink id="landing-page-nav" to="/">
        <Logo />
      </LogoLink>
      <NavLinksDesktop />
      <NavLinksMobile />
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

const LogoLink = styled(Link)`
  margin-left: 1rem;
  margin-right: auto;
`
