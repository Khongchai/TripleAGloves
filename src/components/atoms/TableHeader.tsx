import styled from "styled-components"

export const TH = styled.th<{ center?: boolean }>`
  border: none;
  background: ${props => props.theme.colors.mainBlue};
  color: white;
  padding-left: 8px !important;

  text-align: ${props => (props.center ? "center" : "unset")};
`
