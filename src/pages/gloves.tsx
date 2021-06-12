import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import SectionsNavigator from "../components/molecules/SectionsNavigator"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const Gloves: React.FC<{}> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      nitrileBackground: file(
        relativePath: { eq: "gloves-page/nitrile-background.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const imageData = data.nitrileBackground.childImageSharp.fluid

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
        document.getElementById(entry.target.id + "-nav").style.borderBottom =
          "solid 2px #F2BB63"
      } else {
        document.getElementById(entry.target.id + "-nav").style.borderBottom =
          "solid 2px transparent"
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
    <GlovePageContainer>
      <IntroSection>This is the intro section</IntroSection>
      <JumpableSection id="jumpableSections">
        <SectionsNavigator sectionNames={jumpableSections} />
        <ProductFeaturesSection
          id={jumpableSections[0]}
        ></ProductFeaturesSection>
        <PackagingSection id={jumpableSections[1]}>
          Packaging Section
        </PackagingSection>
        <SpecificationsSection id={jumpableSections[2]}>
          Specification Section
        </SpecificationsSection>
        <CertificationSection id={jumpableSections[3]}>
          Certification Section
        </CertificationSection>
      </JumpableSection>
    </GlovePageContainer>
  )
}

const GlovePageContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  position: relative;
`

const JumpableSection = styled.div`
  height: 100%;
  position: relative;
`

const IntroSection = styled.div`
  height: 80vh;
  width: 100%;
  background: gray;
`

const ProductFeaturesSection = styled.div`
  height: 80vh;
  width: 100%;
  background: brown;
`

const PackagingSection = styled.div`
  height: 40vh;
  width: 100%;
  background: green;
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
