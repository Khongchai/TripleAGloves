import Button from "@atoms/button"
import Container from "@atoms/container"
import ContentBlock from "@atoms/contentBlock"
import { HeaderCurve } from "@atoms/HeaderCurve"
import List from "@atoms/list"
import Subheading from "@atoms/subheading"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"
import SEO from "@utils/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { ImageSlideshow } from "../components/molecules/ImageSlideshow"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImagesQuery {
      building: file(relativePath: { eq: "illustrations/building1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <>
      <SEO title="Home" />
      <SectionHeader />
      <HeaderCurve fill="none" viewBox="0 0 1680 232">
        <path
          fill="#4D92EB"
          d="M0 0h1680v119.847S1428.43 231 1260 231C967.343 231 712.766 9.26 420 9.26 251.618 9.26 0 119.848 0 119.848V0z"
        ></path>
      </HeaderCurve>
      <SectionSetup />
      <ContentContainer content grid gridSplit>
        <ImageSlideshow />
        <ContentBlock>
          <Subheading>Our Gloves</Subheading>
          <h2>Made of Adamantium etc. etc</h2>
          <p>
            No coding, merchant account, or hosting required. Create completely
            customizable forms that can be embedded or shared anywhere. Automate
            and integrate your processes with built-in tools and 3rd party
            integrations.
          </p>
          <List>
            <li>Send funds to your bank account automatically</li>
            <li>Integrate with hundreds of third party providers</li>
            <li>Take granular control of your payment process</li>
            <li>Style the entire checkout process to match your brand</li>
            <li>
              Power up with extensions: Digital Delivery, Mailchimp Pro, etc...
            </li>
          </List>
          <Button href="/about" aria-label="Learn more about the product">
            About Us
          </Button>
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.building.childImageSharp.fluid}></Img>
        </Image>
        <ContentBlock>
          <Subheading>Our Business</Subheading>
          <h2>Our business aims to etc. etc.</h2>
          <p>
            Gatsby is an open source, modern website framework that builds
            performance into every site by leveraging the latest web
            technologies such as React and GraphQL.
          </p>
          <List>
            <li>Modern web tech without the headache</li>
            <li>Bring your own data</li>
            <li>Scale to the entire internet</li>
            <li>Future-proof your website</li>
            <li>Progressive Web Apps</li>
          </List>
          <Button href="/gallery" aria-label="View Gallery">
            View Gallery
          </Button>
        </ContentBlock>
      </ContentContainer>
    </>
  )
}

export default IndexPage

const Image = styled.div``

const ContentContainer = styled(Container)`
  &:nth-of-type(odd) {
    direction: rtl;

    div {
      direction: ltr;
    }
  }
`
