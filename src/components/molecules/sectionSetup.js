import React from "react"
import styled from "styled-components"
import Container from "@atoms/container"
import { media } from "@utils/media"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SeperatorOne from "@assets/seperators/a-seperator-1.svg"
import SeperatorTwo from "@assets/seperators/a-seperator-2.svg"
import SeperatorThree from "@assets/seperators/a-seperator-3.svg"

const SectionSetup = () => {
  const data = useStaticQuery(graphql`
    query filesIllustrations {
      glove1: file(relativePath: { eq: "illustrations/glove-illus1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      glove2: file(relativePath: { eq: "illustrations/glove-illus2.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      glove3: file(relativePath: { eq: "illustrations/glove-illus3.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      glove4: file(relativePath: { eq: "illustrations/glove-illus4.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container content contentTop>
      <Intro>
        <h2>All necessary files can be downloaded below.</h2>
      </Intro>
      <Setup>
        <Step>
          <Seperator>
            <SeperatorOne />
          </Seperator>
          <IllustrationContainer>
            <IllustrationHor fluid={data.glove2.childImageSharp.fluid} />
          </IllustrationContainer>
          <FileDescription>File 1</FileDescription>
        </Step>
        <Step>
          <Seperator>
            <SeperatorTwo />
          </Seperator>
          <IllustrationContainer>
            <IllustrationVert fluid={data.glove1.childImageSharp.fluid} />
          </IllustrationContainer>

          <FileDescription>File 2</FileDescription>
        </Step>
        <Step>
          <Seperator>
            <SeperatorThree />
          </Seperator>
          <IllustrationContainer>
            <IllustrationVert fluid={data.glove4.childImageSharp.fluid} />
          </IllustrationContainer>
          <FileDescription>File 3</FileDescription>
        </Step>
        <Step>
          <IllustrationContainer>
            <IllustrationVert fluid={data.glove3.childImageSharp.fluid} />
          </IllustrationContainer>
          <FileDescription>File 4</FileDescription>
        </Step>
      </Setup>
    </Container>
  )
}

export default SectionSetup

const Intro = styled.div`
  @media only screen and (max-width: 1200px) {
    margin-top: 2rem !important;
  }
  margin-top: -5rem;
  text-align: center;
`

const Setup = styled.div`
  display: grid;
  grid-template-columns: var(--gridQuad);
  margin-top: 60px;

  @media ${media.lg} {
    padding: 1rem 0;
  }
`

const Seperator = styled.div`
  display: none;
  position: absolute;
  right: -22%;
  top: 5%;
  width: 180px;

  svg {
    width: 100%;
    height: auto;
  }

  @media ${media.lg} {
    display: block;
  }
`

const Step = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  &:nth-of-type(2) {
    ${Seperator} {
      top: 25%;
    }
  }
  @media ${media.lg} {
    padding: 1rem;
  }
`
const IllustrationContainer = styled.div`
  width: 85px;
  flex: 1;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IllustrationHor = styled(props => <Img {...props} />)`
  object-fit: contain;
  width: auto;
  height: 85px;
  margin-bottom: 1rem;
  flex: 1;
  z-index: 0;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
  }
  cursor: url("illustrations/cursor/pointer.png"), pointer;
`
const IllustrationVert = styled(props => <Img {...props} />)`
  object-fit: contain;
  width: 85px;
  height: auto;
  margin-bottom: 1rem;
  z-index: 0;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.3);
  }
  cursor: url("illustrations/cursor/pointer.png"), pointer;
`

const FileDescription = styled.h3`
  position: relative;
  z-index: 3;
  font-size: 1.1rem;
`
