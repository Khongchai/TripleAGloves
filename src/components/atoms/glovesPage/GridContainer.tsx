import styled from "styled-components"

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: [left-corner] 0.5fr [content-start] repeat(12, 1fr) [content-end] 0.5fr [right-corner];
  grid-template-rows: [title-begin] 0.7fr 1fr 0.7fr [title-end];
  grid-column-gap: 24px;
`
