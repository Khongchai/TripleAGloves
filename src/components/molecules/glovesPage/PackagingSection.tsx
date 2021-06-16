import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Title } from "../../atoms/glovesPage/Title"

interface PackagingSectionProps {
  id?: string
  row: number
  images: {
    box: IGatsbyImageData
    graphics: IGatsbyImageData
    hands: IGatsbyImageData
  }
}

export const PackagingSection: React.FC<PackagingSectionProps> = ({
  id,
  row,
  images,
}) => {
  const { box, graphics, hands } = images
  return (
    <StyledPackagingSection row={row} id={id}>
      <Title title="Packaging" />
      <br />
      <br />
      <Container>
        <ImageContainer>
          <StyledImg image={box} objectFit="contain" alt="box" />
          <p>
            Dimension <br />W 11 cm. x L 22 cm. x H 0.7 cm.
          </p>
        </ImageContainer>
        <ImageContainer>
          <StyledImg image={hands} objectFit="contain" alt="hand" />
          <p>100 pcs./box</p>
        </ImageContainer>
        <ImageContainer>
          <StyledImg image={graphics} alt="img" objectFit="contain" />
        </ImageContainer>
      </Container>
    </StyledPackagingSection>
  )
}

const StyledPackagingSection = styled.div`
  grid-row: ${props => props.row};
  grid-column: content-begin / content-end;
  height: auto;
  width: 100%;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
const StyledImg = styled(GatsbyImage)`
  width: clamp(200px, 100%, 200px);
  height: 300px;
  @media (max-width: 800px) {
    height: 200px !important;
  }
  margin: 0 auto;
`
