import React, { useEffect } from "react"
import styled from "styled-components"
import Link from "@atoms/link"

const SectionsNavigator: React.FC<{ sectionNames: string[] }> = ({
  sectionNames,
}) => {
  const sections = sectionNames.map(name => {
    const section = (
      <SectionLink id={`${name}-nav`} href={`#${name}`}>
        {name}
      </SectionLink>
    )
    return section
  })

  return <Container id="sections-nav">{sections}</Container>
}

export default SectionsNavigator

const Container = styled.div`
  height: 20vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  position: sticky;
  background-color: white;
`
const SectionLink = styled.a`
  color: #4d92eb;
  font-size: 24px;
  opacity: 0.7;
  border-bottom: 2px transparent solid;
  padding: 1rem;
  text-decoration: none;
  &:hover {
    border-bottom: solid 2px #f2bb63 !important;
  }
`
