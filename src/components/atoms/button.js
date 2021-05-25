import styled from "styled-components"

const Button = styled.a`
  background-color: ${props => props.theme.colors.primary};
  user-select: none;
  border-radius: ${props => props.theme.button.radius};
  font-weight: 500;
  padding: 0.75rem 2rem;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  transition: ${props => props.theme.animation.transition};
  cursor: url("illustrations/cursor/pointer.png"), pointer;
  position: relative;
  z-index: 100;

  &:hover {
    filter: brightness(105%);
    box-shadow: 0px 6px 24px rgba(242, 187, 99, 0.4);
  }
`

export default Button
