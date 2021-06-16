import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

interface TopicProps {
  title: string
  setTopic: React.Dispatch<React.SetStateAction<string>>
  gatsbyImageData: any
}

export const Topic: React.FC<TopicProps> = ({
  title,
  gatsbyImageData,
  setTopic,
}) => {
  return (
    <Container
      onClick={() => {
        setTopic(title)
      }}
    >
      <StyledImage
        alt="topic-tinyImage"
        objectPosition="left top"
        image={gatsbyImageData}
      />
      <TopicDescription>{title}</TopicDescription>
    </Container>
  )
}

const Container = styled.div`
  height: 300px;
  width: 350px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: url("illustrations/cursor/pointer.png"), context-menu;
`
const StyledImage = styled(GatsbyImage)`
  flex: 0.7;
  width: 100%;
  height: 100%;
`
const TopicDescription = styled.div`
  padding: 0.5em;

  flex: 0.3;
  text-align: center;
`
