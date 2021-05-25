import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

export const EnlargedImageArea: React.FC<{
  data: any
  setEnlargedImageData: React.Dispatch<any>
}> = ({ data, setEnlargedImageData }) => {
  return (
    <BlackScreenCover
      onClick={() => {
        setEnlargedImageData(null)
      }}
    >
      <StyledImg objectFit="contain" fluid={data}></StyledImg>
    </BlackScreenCover>
  )
}

const BlackScreenCover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1001;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  padding: 1em;
`

const StyledImg = styled(Img)`
  opacity: 1;
  width: 90%;
  max-height: 90vh;
`
