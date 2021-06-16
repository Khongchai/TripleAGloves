import React, { useEffect } from "react"
import styled from "styled-components"
import { ContentSection } from "../components/molecules/glovesPage/ContentSection"
import SectionsNavigator from "../components/molecules/SectionsNavigator"
import SectionSetup from "@molecules/sectionSetup.js"
import { PackagingSection } from "../components/molecules/glovesPage/PackagingSection"
import { graphql, useStaticQuery } from "gatsby"

const Gloves: React.FC<{}> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      introImage: file(relativePath: { eq: "gloves-page/introImage.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      productFeaturesImage: file(
        relativePath: { eq: "gloves-page/productFeaturesImage.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      box: file(relativePath: { eq: "gloves-page/packaging-box.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      graphics: file(
        relativePath: { eq: "gloves-page/packaging-graphics.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }

      hands: file(relativePath: { eq: "gloves-page/gloves-twohands.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const introImage = data.introImage.childImageSharp.gatsbyImageData
  const productFeaturesImage =
    data.productFeaturesImage.childImageSharp.gatsbyImageData
  const box = data.box.childImageSharp.gatsbyImageData
  const graphics = data.graphics.childImageSharp.gatsbyImageData
  const hands = data.hands.childImageSharp.gatsbyImageData

  const jumpableSections = [
    "Product Features",
    "Packaging",
    "Specification",
    "Certificate",
  ]

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById(
          entry.target.id + "-nav"
        ).style.backgroundColor = "#4D92EB"
        document.getElementById(entry.target.id + "-nav").style.color = "white"
      } else {
        document.getElementById(
          entry.target.id + "-nav"
        ).style.backgroundColor = "unset"
        document.getElementById(entry.target.id + "-nav").style.color =
          "#4D92EB"
      }
    })
  }, observerOptions)

  useEffect(() => {
    jumpableSections.forEach(section => {
      const elem = document.getElementById(section)
      if (elem) {
        observer.observe(elem)
      }
    })
  }, [])

  return (
    <>
      <GlovePageContainer>
        <ContentSection
          introImage={introImage}
          id={"Intro"}
          title={"Triple A Gloves"}
          row={1}
        >
          <p>
            Our Nitrile examination gloves offer excellent touch sensitivity,
            form fitting, tear and puncture resistance as well enhanced
            protection against chemicals. It’s ideal for an extensive use from
            medical to food industries application where hand protection is
            highly needed.
          </p>
        </ContentSection>
        <SectionsNavigator row={2} sectionNames={jumpableSections} />
        <ContentSection
          row={3}
          introImage={productFeaturesImage}
          id={jumpableSections[0]}
          title={"Product Features"}
        >
          <ul>
            <li>Fingertip textured</li>
            <li>Powder Free</li>
            <li>Ambidextrous</li>
            <li>Chemo Drugs tested</li>
            <li>Lab Chemical Tested</li>
            <li>Standard Cuff</li>
            <li>Aqua Blue Color</li>
          </ul>
        </ContentSection>
        <PackagingSection
          images={{ box, graphics, hands }}
          row={4}
          id={jumpableSections[1]}
        />
      </GlovePageContainer>
      <SectionSetup />
    </>
  )
}

const GlovePageContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  position: relative;
  margin: 0 auto;
  max-width: 2560px;
  transition: 0.3s;
  padding-top: 2rem;

  display: grid;
  row-gap: 2rem;
  grid-template-columns: 0.2fr [content-begin] 1fr [content-end] 0.2fr;
  @media (max-width: 1300px) {
    grid-template-columns: [content-begin] 1fr [content-end];
  }
`

const SpecificationsSection = styled.div`
  height: 60vh;
  width: 100%;
  background: Yellow;
`

const CertificationSection = styled.div`
  height: 80vh;
  width: 100%;
  background: purple;
`

export default Gloves
