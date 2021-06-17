import styled from "styled-components"

export const TD = styled.td<{ colSpan?: string }>`
  padding-left: 4px !important;
  padding-right: 4px !important;

  background: ${props =>
    props.colSpan ? props.theme.colors.lightBlue : "unset"};
`
