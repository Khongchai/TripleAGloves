import React from "react"
import styled from "styled-components"
import { Title } from "../../atoms/glovesPage/Title"
import { Table } from "../../atoms/Table"
import { TD } from "../../atoms/TableData"
import { TH } from "../../atoms/TableHeader"

interface SpecificationsSectionProps {
  id: string
  row: number
}

export const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({
  id,
  row,
}) => {
  return (
    <Container id={id} row={row}>
      <Title title={"Specifications"} />
      <TableContainer className="first-table">
        <TableWithAlternatingColors>
          <tr>
            <TDNoBorder>Type</TDNoBorder>
            <TDNoBorder>Powder-Free</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Specification</TDNoBorder>
            <TDNoBorder>Non-Sterile/Disposable</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Cu</TDNoBorder>
            <TDNoBorder>Beaded</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Surface</TDNoBorder>
            <TDNoBorder>Smooth/Textured</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Main Material</TDNoBorder>
            <TDNoBorder>Nitrile</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Application Settings</TDNoBorder>
            <TDNoBorder>
              Medium risk-medical, dental, procedures, chemotherapy drugs,
              pathology lab, patient care and food handing
            </TDNoBorder>
          </tr>
        </TableWithAlternatingColors>
        <TableWithAlternatingColors>
          <tr>
            <TDNoBorder>Regulatory Compliance</TDNoBorder>
            <TDNoBorder>MDD 93/42/EEC</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Standard </TDNoBorder>
            <TDNoBorder>ASTM D6319, ASTM 6978, EN 455 PART 1/2/3/4</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Classification</TDNoBorder>
            <TDNoBorder>Class I (FDA), Class I (MDA 93/42/EEC)</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Color</TDNoBorder>
            <TDNoBorder>Aqua Blue</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Main Material</TDNoBorder>
            <TDNoBorder>Nitrile</TDNoBorder>
          </tr>
        </TableWithAlternatingColors>
      </TableContainer>
      <Title title={"Product Properties"} />
      <TableContainer>
        <TableFirstChildOfRowIsBlue>
          <tr>
            <TH rowSpan="2">Dimensions</TH>
            <TH colSpan="4" center={true}>
              Standards
            </TH>
          </tr>
          <tr>
            <TH>Triple A GLoves</TH>
            <TH>ASTM</TH>
            <TH>EN 455</TH>
          </tr>
          <tr>
            <TDNoBorder>Length(mm)</TDNoBorder>
            <TDNoBorder>240</TDNoBorder>
            <TDNoBorder>230 - 240</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder colSpan="4">Palm Width (mm)</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>S</TDNoBorder>
            <TDNoBorder>84+/-3</TDNoBorder>
            <TDNoBorder>80+/-10</TDNoBorder>
            <TDNoBorder>80+/-10</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>M</TDNoBorder>
            <TDNoBorder>94+/-3</TDNoBorder>
            <TDNoBorder>95+/-10</TDNoBorder>
            <TDNoBorder>95+/-10</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>L</TDNoBorder>
            <TDNoBorder>105+/-3</TDNoBorder>
            <TDNoBorder>110+/-10</TDNoBorder>
            <TDNoBorder>110+/-10</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>XL</TDNoBorder>
            <TDNoBorder>113+/-3</TDNoBorder>
            <TDNoBorder>120+/-10</TDNoBorder>
            <TDNoBorder>110+/-10</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder colSpan="4">Thickness (mm)</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Finger</TDNoBorder>
            <TDNoBorder>0.11+-0.02</TDNoBorder>
            <TDNoBorder>Min 0.05</TDNoBorder>
            <TDNoBorder>N/A</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Palm</TDNoBorder>
            <TDNoBorder>0.08+-0.03</TDNoBorder>
            <TDNoBorder>Min 0.05</TDNoBorder>
            <TDNoBorder>N/A</TDNoBorder>
          </tr>
        </TableFirstChildOfRowIsBlue>
        <TableFirstChildOfRowIsBlue>
          <tr>
            <TH>Properties</TH>
            <TH>ASTM D6319</TH>
          </tr>
          <tr>
            <TDNoBorder colSpan="4">Tensile Strength (MPa)</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Before Aging</TDNoBorder>
            <TDNoBorder>18</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>After Aging</TDNoBorder>
            <TDNoBorder>16</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder colSpan="4">Elongation at Break (%)</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Before Aging</TDNoBorder>
            <TDNoBorder>{">"}500</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>After Aging</TDNoBorder>
            <TDNoBorder>{">"}600</TDNoBorder>
          </tr>
          <tr>
            <TH>Properties</TH>
            <TH>EN 455</TH>
          </tr>
          <tr>
            <TDNoBorder colSpan="4">Median Force at Break (N)</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>Before Aging</TDNoBorder>
            <TDNoBorder>6</TDNoBorder>
          </tr>
          <tr>
            <TDNoBorder>After Aging</TDNoBorder>
            <TDNoBorder>6</TDNoBorder>
          </tr>
        </TableFirstChildOfRowIsBlue>
      </TableContainer>
    </Container>
  )
}
const Container = styled.div<{ row: number }>`
  grid-row: ${props => props.row};
  grid-column: content-begin / content-end;
  @media (max-width: 800px) {
  }
`

const TableContainer = styled.div`
  display: flex;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

const TableWithAlternatingColors = styled(Table)`
  & > tr {
    &:nth-child(odd) {
      background: ${props => props.theme.colors.lightBlue};
    }
    > td {
      :first-child {
        font-weight: bold;
      }
    }
  }
`

const TableFirstChildOfRowIsBlue = styled(Table)`
  & > tr {
    > td {
      :first-child {
        font-weight: bold;
      }
    }
  }
`
const TDNoBorder = styled(TD)`
  border: none;
`
