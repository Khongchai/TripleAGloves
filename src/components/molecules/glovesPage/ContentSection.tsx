import React from "react"

import styled from "styled-components"
import { StyledDescription } from "../../atoms/glovesPage/Description"
import { GridContainer } from "../../atoms/glovesPage/GridContainer"
import { Title } from "../../atoms/glovesPage/Title"
import { ThreePicturesSection } from "../../atoms/glovesPage/ThreePicturesSection"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface ContentSection {
  id: string
  introImage: IGatsbyImageData
  title: string
  row: number
}

export const ContentSection: React.FC<ContentSection> = ({
  id,
  introImage,
  title,
  children,
  row,
}) => {
  return (
    <GridContainer row={row} id={id}>
      <Title mirrorText={true} title={title} />
      <FlexContainer>
        <ThreePicturesSection pictures={introImage} altText="intro-pictures" />
        <StyledDescription>{children}</StyledDescription>
      </FlexContainer>
    </GridContainer>
  )
}

const FlexContainer = styled.div`
  display: flex;
  grid-row: 3 / -1;
  grid-column: content-start / content-end;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

//gatsby background img sauce: https://www.gatsbyjs.com/plugins/gatsby-background-image/
