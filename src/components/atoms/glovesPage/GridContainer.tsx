import styled from "styled-components"

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-row: ${props => props.row};
  grid-column: content-begin / content-end;
  grid-template-columns: 0.2fr [content-start] repeat(12, 0.7fr) [content-end] 0.2fr;
  grid-template-rows: [top] 0.2fr [title-begin] 0.3fr [content-begin] 1.5fr [content-end] 0.6fr [bottom];
  grid-column-gap: 16px;
  margin-bottom: 4rem;
`
