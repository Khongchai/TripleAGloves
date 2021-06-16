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
  flex: 1;
  color: black;
  display: grid;
  place-items: center;
  color: #6a6969;
`
