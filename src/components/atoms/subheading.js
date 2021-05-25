import styled from "styled-components"

const Subheading = styled.h6`
  color: ${props => (props.color ? props.color : "black")};
  letter-spacing: 3px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export default Subheading
