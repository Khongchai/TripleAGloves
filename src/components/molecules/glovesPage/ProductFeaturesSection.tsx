import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { GridContainer } from "../../atoms/glovesPage/GridContainer"
import { StyledDescription } from "../../atoms/glovesPage/Description"

export const ProductFeaturesSection: React.FC<{ id: string }> = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      glovesPuttingOn: file(
        relativePath: { eq: "gloves-page/gloves-puttingon.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const background = data.glovesPuttingOn.childImageSharp.fluid

  return (
    <StyledProductFeaturesSection fluid={background} id={id}>
      <GridContainer>
        <StyledDescription customGridPosition="content-start / span 5">
          <h2>Product Features</h2>
          <ul>
            <li>Fingertip textured</li>
            <li>Powder Free</li>
            <li>Ambidextrous</li>
            <li>Chemo Drugs tested</li>
            <li>Lab Chemical Tested</li>
            <li>Standard Cuff</li>
            <li>Aqua Blue Color</li>
          </ul>
        </StyledDescription>
      </GridContainer>
    </StyledProductFeaturesSection>
  )
}

const StyledProductFeaturesSection = styled(BackgroundImage)`
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`
