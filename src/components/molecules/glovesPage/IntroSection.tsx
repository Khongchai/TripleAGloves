import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

interface IntroSectionProps {
  id?: string
}

export const IntroSection: React.FC<IntroSectionProps> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      nitrileBackground: file(
        relativePath: { eq: "gloves-page/nitrile-background.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const imageData = data.nitrileBackground.childImageSharp.fluid

  return <StyledIntroSection>This is the intro section</StyledIntroSection>
}

const StyledIntroSection = styled.div`
  height: 80vh;
  width: 100%;
  background: gray;
`

//gatsby background img sauce: https://www.gatsbyjs.com/plugins/gatsby-background-image/
