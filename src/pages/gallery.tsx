import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { capitalize } from "lodash"
import { EnlargedImageArea } from "../components/molecules/EnlargedImageArea"
import { TextHeader } from "../components/atoms/TextHeader"

interface galleryProps {}

const gallery: React.FC<galleryProps> = ({}) => {
  /**
   * References all images in the company-images' subfolders.
   */
  const data = useStaticQuery(graphql`
    query images {
      boiler: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "company-images/boiler" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxHeight: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      factories: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "company-images/factories" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      process: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "company-images/process" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      product: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "company-images/product" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const extractedImages = {
    boiler: data.boiler.edges.map(
      edge => edge.node.childImageSharp.fluid
    ) as any[],
    factories: data.factories.edges.map(
      edge => edge.node.childImageSharp.fluid
    ) as any[],
    process: data.process.edges.map(
      edge => edge.node.childImageSharp.fluid
    ) as any[],
    product: data.product.edges.map(
      edge => edge.node.childImageSharp.fluid
    ) as any[],
  }
  const imagesKeys = Object.keys(extractedImages)
  const [enlargedImageData, setEnlargedImageData] = useState<any>(null)

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(179.4deg, rgb(77,146,235) 0.52%, rgba(150, 191, 244, 0.669366) 103.48%, rgba(173, 202, 240, 0) 235.36%)"
  }, [])

  return (
    <>
      {enlargedImageData ? (
        <EnlargedImageArea
          setEnlargedImageData={setEnlargedImageData}
          data={enlargedImageData}
        />
      ) : null}
      <GalleryContainer>
        <TextHeader color="white">
          <h3>Our Gallery</h3>
          <p>
            Collections of images to help you get to know us better. The
            collections also include all images used on this website.
          </p>
        </TextHeader>
        <GalleryBody>
          {imagesKeys.map(key =>
            //prettier-ignore
            <CollectionContainer>
              <CollectionName key={key}>{capitalize(key)}</CollectionName>
             <Collection >
              {extractedImages[key].map((fluid, i) => 
              <div onClick={() => {setEnlargedImageData(fluid)}} style={{padding: 0, margin: 0}}>
                <StyledImg  key={i} objectFit="cover"  fluid={fluid}  />    
              </div>
              )}
            </Collection>
          </CollectionContainer>
          )}
        </GalleryBody>
      </GalleryContainer>
    </>
  )
}

const GalleryContainer = styled.div`
  background-image: url("vectors/decor1.png");
  background-repeat: repeat-x;
  width: 100%;
  height: auto;
`

const GalleryBody = styled.div`
  min-height: 100vh;
  height: auto;
  width: 80vw;
  @media only screen and (max-width: 1023px) {
    width: 90vw !important;
  }
  margin: 0 auto;
  & * + * {
    margin-bottom: 4rem;
  }
`

const CollectionContainer = styled.div``

const CollectionName = styled.h3`
  text-align: center;
  color: white;
`

const Collection = styled.div`
  column-count: 4;
  column-gap: var(--spacingGallery);
  @media only screen and (max-width: 1200px) {
    column-count: 3;
  }

  /* Masonry on small screens */
  @media only screen and (max-width: 767px) {
    column-count: 2;
  }
  padding-top: 1em;
`

const StyledImg = styled(Img)`
  background-color: #eee;
  display: inline-block;
  margin-bottom: calc(var(--spacingGallery) - 8px);
  width: 100%;
  transition: all 200ms;
  &:hover {
    cursor: url("illustrations/cursor/pointer.png"), context-menu;
  }
`

export default gallery
