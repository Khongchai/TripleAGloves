import styled from "styled-components"

export const TextHeader = styled.div`
  padding: var(--spacingContent);
  text-align: center;
  margin-top: 2rem;
  color: ${props => (props.color ? props.color : "black")};
`
