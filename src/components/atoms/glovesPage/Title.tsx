import React from "react"
import styled from "styled-components"

interface TitleProps {
  title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitlesContainer>
      <TitleText>
        <b>{title}</b>
      </TitleText>
      <MirrorText>
        <b>{title}</b>
      </MirrorText>
    </TitlesContainer>
  )
}

const TitlesContainer = styled.div`
  grid-row: title-begin / content-begin;
  grid-column: 2 / -1;
  width: fit-content;
  margin-bottom: 2rem;
`

const TitleText = styled.h2`
  text-transform: capitalize;
  letter-spacing: 4px;
  color: #4d92eb;
  margin-bottom: 0.275em !important;
`

const MirrorText = styled.h2`
  text-transform: capitalize;
  letter-spacing: 4px;
  color: #4d92eb;
  margin-left: 1.75em;
  opacity: 0.5;
`
