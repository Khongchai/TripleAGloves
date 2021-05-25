import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import Logo from "@atoms/logo"
import styled from "styled-components"
import Link from "@atoms/link"
import { media } from "@utils/media"
import { LanguageContext } from "../../multilang-data/multi-lang-context"
import { Text } from "../../multilang-data/Text"

const Navigation = ({ siteTitle }) => {
  const { userLanguage, changeLanguage } = useContext(LanguageContext)
  return (
    <Nav className="nav-bar">
      <LogoLink id="landing-page-nav" to="/">
        <Logo />
      </LogoLink>
      <NavLinks>
        <li>
          <NavLink to="/gloves" id="about-gloves" alt="">
            <Text text={"Gloves"} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" id="about-us-nav" alt="">
            <Text text={"About Us"} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" id="gallery-nav" alt="">
            <Text text={"Gallery"} />
          </NavLink>
        </li>
        <li>
          <NavLink href="#contact-us" id="contact-us-nav" alt="">
            <Text text={"Contact Us"} />
          </NavLink>
        </li>
      </NavLinks>
      <LanguageButton
        onClick={() => {
          changeLanguage(userLanguage === "en" ? "th" : "en")
        }}
      >
        {userLanguage}
      </LanguageButton>
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

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding-left: 0;

  @media ${media.lg} {
    padding-left: 2rem;
  }

  li {
    margin: 0;

    a {
      font-size: 16px;
    }
  }
`

const NavLink = styled(Link)`
  margin-right: 2rem;
`
const LogoLink = styled(Link)`
  margin-left: 1rem;
  margin-right: 1rem;
`

const LanguageButton = styled.div`
  width: 3rem;
  text-align: center;
  height: fit-content;
  background: ${props => props.theme.colors.primary};
  padding: 0.4rem 0.7rem 0.4rem 0.7rem;
  border-radius: 6px;
  transition: transform 0.2s;
  user-select: none;
  &:hover {
    transform: scale(1.1);
    cursor: url("illustrations/cursor/pointer.png"), auto;
  }
`
