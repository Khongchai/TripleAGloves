import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import styled from "styled-components"
import { StyledDescription } from "../../atoms/glovesPage/Description"
import { GridContainer } from "../../atoms/glovesPage/GridContainer"

interface IntroSectionProps {
  id?: string
}

export const StyledIntroSection: React.FC<IntroSectionProps> = ({}) => {
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

      glovesPalm: file(relativePath: { eq: "gloves-page/gloves-palm.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const background = data.nitrileBackground.childImageSharp.fluid
  const leftPic = data.glovesPalm.childImageSharp.fluid

  return (
    <IntroSection
      fluid={background}
      imgStyle={{ backgroundRepeat: "no-repeat" }}
    >
      <GridContainer>
        <LeftPic fluid={leftPic} />
        <StyledDescription>
          <h2>Triple A Gloves</h2>
          <p>
            Our Nitrile examination gloves offer excellent touch sensitivity,
            form fitting, tear and puncture resistance as well enhanced
            protection against chemicals. It’s ideal for an extensive use from
            medical to food industries application where hand protection is
            highly needed.
          </p>
        </StyledDescription>
      </GridContainer>
    </IntroSection>
  )
}

const IntroSection = styled(BackgroundImage)`
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`

const LeftPic = styled(Img)`
  grid-column: left-corner / span 6;
  grid-row: 2;
`

//gatsby background img sauce: https://www.gatsbyjs.com/plugins/gatsby-background-image/
