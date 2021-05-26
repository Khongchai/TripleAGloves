import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Text } from "../../multilang-data/Text"
import { LanguageContext } from "../../multilang-data/multi-lang-context"
import { media } from "@utils/media"
import Link from "@atoms/link"
import { HamburgerMenu } from "./HamburgerMenu"
import { BurgerButton } from "../atoms/BurgerToggle"

export const NavLinksDesktop: React.FC<{}> = ({}) => {
  return (
    <DesktopWrapper>
      <NavigationLinksSection />
    </DesktopWrapper>
  )
}

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

//////////////////////////////////////////////////////////////////////////////////////

export const NavLinksMobile: React.FC<{}> = ({}) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <MobileWrapper>
      <BurgerButton
        onClick={() => setShowMenu(!showMenu)}
        show={showMenu}
        src="vectors/hamburger.svg"
      />
      <HamburgerMenu show={showMenu}>
        <NavigationLinksSection layoutDir="column" />
      </HamburgerMenu>
    </MobileWrapper>
  )
}

const MobileWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    display: flex;
  }
  @media only screen and (min-width: 801px) {
    display: none;
  }
  justify-content: center;
`

//////////////////////////////////////////////////////////////////////////////////////

const NavigationLinksSection: React.FC<{ layoutDir?: string }> = ({
  layoutDir,
}) => {
  const { userLanguage, changeLanguage } = useContext(LanguageContext)

  return (
    <NavLinks>
      <li>
        <NavLink to="/gloves" id="about-gloves">
          <Text text={"Gloves"} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" id="about-us-nav">
          <Text text={"About Us"} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery" id="gallery-nav">
          <Text text={"Gallery"} />
        </NavLink>
      </li>
      <li>
        <NavLink href="#contact-us" id="contact-us-nav" alt="">
          <Text text={"Contact Us"} />
        </NavLink>
      </li>
      <LanguageButton
        onClick={() => {
          changeLanguage(userLanguage === "en" ? "th" : "en")
        }}
      >
        {userLanguage}
      </LanguageButton>
    </NavLinks>
  )
}

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 800px) {
    flex-direction: column !important;
    & * + * {
      margin-top: 2rem !important;
    }
  }

  list-style: none;
  margin: 0;
  padding-left: 0;
  align-items: center;
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
  @media only screen and (max-width: 800px) {
    color: white !important;
    margin-right: 0 !important;
    font-size: 2rem;
  }
  margin-right: 3rem;
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
