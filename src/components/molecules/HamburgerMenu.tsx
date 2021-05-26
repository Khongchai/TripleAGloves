import React from "react"
import styled from "styled-components"

export const HamburgerMenu: React.FC<{ show: boolean }> = ({
  show,
  children,
}) => {
  return <HamburgerWrapper show={show}>{children}</HamburgerWrapper>
}

const HamburgerWrapper = styled.div`
  position: fixed;
  //temp
  width: 80vw;
  height: 100vh;
  left: 0;
  top: 0;
  opacity: ${props => (props.show ? "1" : "0")};
  background: ${props => props.theme.colors.secondary};
  pointer-events: ${props => (props.show ? "auto" : "none")};
  display: flex;
  transition: all 0.4s;
  flex-direction: column;
  justify-content: center;
`
