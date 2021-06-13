import React, { useEffect } from "react"
import styled from "styled-components"
import { StyledIntroSection } from "../components/molecules/glovesPage/IntroSection"
import { ProductFeaturesSection } from "../components/molecules/glovesPage/ProductFeaturesSection"
import SectionsNavigator from "../components/molecules/SectionsNavigator"
import SectionSetup from "@molecules/sectionSetup.js"

const Gloves: React.FC<{}> = ({}) => {
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
      <StyledIntroSection />
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
      <SectionSetup />
    </GlovePageContainer>
  )
}

const GlovePageContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  position: relative;
  padding-left: 7rem;
  padding-right: 7rem;
  transition: 0.3s;
  @media (max-width: 1300px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

const JumpableSection = styled.div`
  height: 100%;
  position: relative;
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
