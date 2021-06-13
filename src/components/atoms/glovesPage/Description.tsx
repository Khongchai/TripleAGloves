import styled from "styled-components"
import React from "react"

export const StyledDescription: React.FC<{ customGridPosition?: string }> = ({
  children,
  customGridPosition,
}) => {
  return (
    <Description customGridPosition={customGridPosition}>
      <div>{children}</div>
    </Description>
  )
}
const Description = styled.div`
  grid-row: title-begin / title-end;
  grid-column: ${props =>
    props.customGridPosition ? props.customGridPosition : "8 / content-end"};

  color: white;
  background: rgba(78, 150, 202, 0.4);

  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 3rem;
  display: grid;
  place-items: center;
`
