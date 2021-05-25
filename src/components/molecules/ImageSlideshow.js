import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { useState } from "react"

export const ImageSlideshow = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allImages: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "mainImages" }
        }
      ) {
        edges {
          node {
            sourceInstanceName
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      chevron: file(relativePath: { eq: "chevron.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const images = data.allImages.edges.map(edge => (
    <CustomImg fluid={edge.node.childImageSharp.fluid} />
  ))
  const chevron = data.chevron.childImageSharp.fluid
  const imagesLength = images.length
  const [imageOrder, setImageOrder] = useState(0)

  /**
   * @param {-1 | 1} operation
   */
  function incrementOrder(operation) {
    if (imageOrder + operation > imagesLength - 1) {
      setImageOrder(0)
    } else if (imageOrder + operation < 0) {
      setImageOrder(imagesLength - 1)
    } else {
      setImageOrder(imageOrder + operation)
    }
  }

  return (
    <>
      <CarouselContainer>
        <ChevronWrapper
          onClick={() => {
            incrementOrder(-1)
          }}
        >
          <Chevron fluid={chevron} />
        </ChevronWrapper>
        <ImageContainer>{images[imageOrder]}</ImageContainer>
        <ChevronWrapper
          onClick={() => {
            incrementOrder(1)
          }}
        >
          <Chevron fluid={chevron} />
        </ChevronWrapper>
      </CarouselContainer>
    </>
  )
}

const CarouselContainer = styled.div`
  height: 600px;
  max-height: 600px;
  width: clamp(300px, 100%, 600px);
  margin-bottom: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: [chevron-left-start] 0.1fr [chevron-left-end] 2fr [chevron-right-end] 0.1fr [chevron-right-start];
  place-items: center;
`
const ImageContainer = styled.div`
  margin: 0 10% 0 10%;
  height: clamp(300px, 100%, 600px);
  overflow-y: hidden;
  grid-row: 1;
  display: flex;
  grid-column: chevron-left-end / chevron-right-end;
  width: clamp(400px, 100%, 700px);
`
const CustomImg = styled(props => <Img {...props} />)`
  object-fit: contain;
  border: 2px solid #8a828f;
  border-radius: 4px;
  flex: 1;
`
const Chevron = styled(props => <Img {...props} />)`
  width: 30px;
  height: 30px;
  cursor: url("illustrations/cursor/pointer.png"), pointer;
`

const ChevronWrapper = styled.span`
  :first-child {
    grid-column: chevron-left-start / chevron-left-end;
    transform: rotate(90deg);
  }
  grid-column: chevron-right-start/ chevron-right-end;
  transform: rotate(-90deg);
`
