import React from "react"
import styled from "styled-components"
import Link from "@atoms/link"

import { media } from "@utils/media"

export const ContactForm = () => {
  return (
    <Box>
      <Info>
        <Contact>
          <a href="800.120.2132">Phone: +667891546</a>
          <a href="mailto:info@google.com">Email: hi@gatsbystarter.com</a>
          <a href="https://icons8.com/">Illustrations Open Sourced by Icons8</a>
        </Contact>
        <Social>
          <li>
            <Link style={{ color: "white" }} href="https://instagram.com">
              Instagram
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} href="https://twitter.com">
              Twitter
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} href="https://facebook.com">
              Facebook
            </Link>
          </li>
        </Social>
      </Info>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`

const Info = styled.div``

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  a {
    color: ${props => props.theme.colors.white};
    margin-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const Social = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`

const Navigation = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  li {
    margin-right: 1rem;
  }
`
