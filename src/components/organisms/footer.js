import React from "react"
import styled from "styled-components"
import Logo from "@atoms/logo"
import LinkTop from "@atoms/linkTop"
import { media } from "@utils/media"

const Footer = () => {
  return (
    <FooterContainer id="contact-us">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Info>
        <Contact>
          <a>
            <b>Sea Craft Tanker CO., LTD. (SCT Industrial)</b>{" "}
          </a>
          <a>246/2 Moo 3 Samrong, Phrapradang, Samutprakarn 10130</a>
          <br />
          <a>
            <b>Distributor</b>
          </a>
          <a>The Millions Dekor CO., LTD.</a>
          <a>Phone: 099-396-4199</a>
          <a
            href="mailto:themillionstrade@gmail.com"
            style={{ textDecoration: "underline" }}
          >
            Email: themillionstrade@gmail.com
          </a>
        </Contact>
      </Info>

      <LinkTop />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  align-items: start;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  padding: var(--spacingContent);

  position: relative;
  background: ${props => props.theme.colors.secondary};

  @media ${media.lg} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`

const Info = styled.div``

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  justify-content: center;

  a {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0;
    text-decoration: none;
    font-size: clamp(0.8rem, 1vw, 1rem);

    &:hover {
      color: ${props => props.theme.colors.black};
    }
  }
`
