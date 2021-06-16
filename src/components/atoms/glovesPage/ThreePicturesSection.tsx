import React from "react"
import styled from "styled-components"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface ThreePicturesSectionProps {
  //Use dynamic image cus props passed from parent
  pictures: IGatsbyImageData
  altText: string
}

export const ThreePicturesSection: React.FC<ThreePicturesSectionProps> = ({
  pictures,
  altText,
}) => {
  return (
    <PicturesContainer alt={altText} objectFit="contain" image={pictures} />
  )
}

const PicturesContainer = styled(GatsbyImage)`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-right: 2rem;
`
