import React from "react"
import styled from "styled-components"

export const ProductFeaturesSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <StyledProductFeaturesSection id={id}>
      Product Features section
    </StyledProductFeaturesSection>
  )
}

const StyledProductFeaturesSection = styled.div`
  height: 80vh;
  width: 100%;
  background: brown;
`
