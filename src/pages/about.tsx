import React, { useState } from "react"
import styled from "styled-components"
import { HeaderCurve } from "../components/atoms/HeaderCurve"
import { Topic } from "../components/atoms/Topic"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useStaticQuery, graphql } from "gatsby"
import { useFirstAsKeyForSecondkeyArr } from "../utils/functions/RecordUseFirstAsKeyForSecond"
import { GatsbyImage } from "gatsby-plugin-image"
import { TextHeader } from "../components/atoms/TextHeader"

interface AboutUsProps {}
export type MdxData = {
  excerpt: string
  frontmatter: {
    title: string
    tinyImg: { childImageSharp: { gatsbyImageData: any } }
    wallpaper: { childImageSharp: { gatsbyImageData: any } }
  }
}
const AboutUs: React.FC<AboutUsProps> = ({}) => {
  const data = useStaticQuery(graphql`
    query allMDX {
      allMdx(filter: { frontmatter: { page: { eq: "About" } } }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              tinyImg {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              wallpaper {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `)
  const allTitles: string[] = data.allMdx.edges.map(
    edge => edge.node.frontmatter.title
  )
  const allNodes: Array<MdxData> = data.allMdx.edges.map(edge => edge.node)
  const [selectedTopic, setSelectedTopic] = useState<string>(allTitles[0])
  const titleNodeMap = useFirstAsKeyForSecondkeyArr(allTitles, allNodes)

  return (
    <>
      <AboutHeader>
        <TextHeader>
          <h3>Our Business</h3>
          <p>Our factory has been established since the dawn of time.</p>
        </TextHeader>

        <TopicSelector>
          {allNodes.map((node: MdxData) => (
            <Topic
              setTopic={setSelectedTopic}
              title={node.frontmatter.title}
              gatsbyImageData={
                node.frontmatter.tinyImg.childImageSharp.gatsbyImageData
              }
            />
          ))}
        </TopicSelector>
      </AboutHeader>
      <HeaderCurve fill="none" viewBox="0 0 1680 232">
        <path
          fill="#B6D3F9"
          d="M0 0h1680v119.847S1428.43 231 1260 231C967.343 231 712.766 9.26 420 9.26 251.618 9.26 0 119.848 0 119.848V0z"
        />
      </HeaderCurve>
      <AboutBody>
        <TopicDescription>
          <h3>{titleNodeMap[selectedTopic].frontmatter.title}</h3>
          {titleNodeMap[selectedTopic].excerpt}
        </TopicDescription>
        <TopicWallpaper>
          <StyledImg
            image={
              titleNodeMap[selectedTopic].frontmatter.wallpaper.childImageSharp
                .gatsbyImageData
            }
            objectPosition="left"
            alt="topic-wallpaper"
          />
        </TopicWallpaper>
      </AboutBody>
    </>
  )
}

export default AboutUs

const AboutHeader = styled.div`
  background: linear-gradient(
    179deg,
    #78b0fa 0.52%,
    rgba(150, 191, 244, 0.669366) 103.48%,
    rgba(173, 202, 240, 0) 235.36%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  height: auto;
  width: 100%;
  & > * {
    color: black;
  }
`

const TopicSelector = styled.div`
  width: 100%;
  min-height: 20vh;
  height: fit-content;
  justify-content: space-evenly;
  flex-wrap: wrap;
  display: flex;
  & > * {
    margin-bottom: 1rem;
    margin-right: 1rem;
    position: relative;
    z-index: 1001;
  }
`

const AboutBody = styled.div`
  min-height: 70vh;
  height: fit-content;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
  //padding: var(--spacingContent);
`
const TopicDescription = styled.div`
  flex: 0.3;
  margin: 0;
  background: #69a3ee;
  color: white;
  padding: var(--spacingContent);
`

const TopicWallpaper = styled.div`
  flex: 0.7;
`

const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  float: left;
`
