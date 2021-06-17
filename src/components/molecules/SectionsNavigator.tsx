import React from "react"
import styled from "styled-components"

const SectionsNavigator: React.FC<{ sectionNames: string[]; row: number }> = ({
  sectionNames,
  row,
}) => {
  const sections = sectionNames.map(name => {
    const section = (
      <SectionLink id={`${name}-nav`} href={`#${name}`}>
        {name}
      </SectionLink>
    )
    return section
  })

  return (
    <Container row={row} id="sections-nav">
      {sections}
    </Container>
  )
}

export default SectionsNavigator

const Container = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  grid-row: ${props => props.row};
  grid-column: 1 / -1;
  top: 0;
  position: sticky;
  background-color: #eef5fd;
  transition: 0.2s;
  z-index: 10;
  @media (max-width: 800px) {
    display: none;
  }
`

const SectionLink = styled.a`
  font-size: 20px;
  display: grid;
  height: 100%;
  place-items: center;
  padding-left: 0.7rem;
  padding-right: 0.7rem;

  border-bottom: 2px transparent solid;
  text-decoration: none;
  transition: 0.3s;
  color: ${props => props.theme.colors.mainBlue};
  &:hover {
    color: white !important;
    background-color: ${props => props.theme.colors.mainBlue} !important;
  }

  @media (max-width: 800px) {
    font-size: 14px !important;
  }
`
