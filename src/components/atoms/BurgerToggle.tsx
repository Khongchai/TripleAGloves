import styled from "styled-components"

export const BurgerButton = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1000;
  margin: 0;
  filter: ${props => (props.show ? "invert(1)" : "none")};
  transition: filter 0.3s;
  &:hover {
    cursor: url("illustrations/cursor/pointer.png"), auto;
  }
`
