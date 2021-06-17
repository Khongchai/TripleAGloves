import React from "react"
import styled from "styled-components"
import { Title } from "../../../atoms/glovesPage/Title"
import { Table } from "../../../atoms/Table"
import { TD } from "../../../atoms/TableData"
import { TH } from "../../../atoms/TableHeader"
import { StaticImage } from "gatsby-plugin-image"

interface CertificationsSectionProps {
  id: string
  row: number
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  id,
  row,
}) => {
  return (
    <Container id={id} row={row}>
      <Title title="Certifications" />
      <CertificationContainer>
        <h5>
          Accredited with the US Food & Drug Administration (USFDA), European
          Standards (EN 455) & CE marking{" "}
          <span style={{ color: "red" }}>(ON PROCESSING)</span>
        </h5>
        <Certification>
          <Table>
            <tr>
              <TH>Regulartory Compliance / Topic</TH>
              <TH>Standard</TH>
              <TH>Standard Name</TH>
            </tr>
            <tr>
              <TD rowSpan="4">Medical Device Directive 93/42/EEC</TD>
              <TD>EN 455-1:2000</TD>
              <TD>
                Medical gloves for single use -{" "}
                <b>Pt. 1: Requirements and testing for freedom from holes</b>
              </TD>
            </tr>
            <tr>
              <TD>EN 455-2:2009 + A2:2013 & EN 455-2:2015</TD>
              <TD>
                Medical gloves for single use -{" "}
                <b>Pt. 2: Requirements and testing </b>
                for physical properties
              </TD>
            </tr>
            <tr>
              <TD>EN 455-3:2006 & EN 455-3:2015</TD>
              <TD>
                Medical gloves for single use -{" "}
                <b>Pt. 3: Requirements and testing</b>
                for biological evaluation
              </TD>
            </tr>
            <tr>
              <TD>EN 455-4:2009</TD>
              <TD>
                <b>
                  Speciﬁcation for nitrile examination gloves for medical
                  application
                </b>
              </TD>
            </tr>
            <tr>
              <TD>US FDA</TD>
              <TD>ASTM D 6319</TD>
              <TD>
                <b>
                  Speciﬁcation for nitrile examination gloves for medical
                  application
                </b>
              </TD>
            </tr>
            <tr>
              <TD rowSpan="5">
                PPE EU Regulation 2016/425 (formerly PPE Directive 89/686/EEC)
              </TD>
              <TD>EN 420:2003</TD>
              <TD>Protective gloves - general requirements and test methods</TD>
            </tr>
            <tr>
              <TD>EN ISO 374-1:2016</TD>
              <TD>
                Protective gloves against dangerous chemicals and microorganisms
                -
                <b>
                  Pt. 1: Terminology and performance requirements for chemical
                </b>
                risks
              </TD>
            </tr>
            <tr>
              <TD>EN 374-2:2014</TD>
              <TD>
                Protective gloves against dangerous chemicals and microorganisms
                -<b> Pt. 2: Determination of resistance to penetration</b>
              </TD>
            </tr>
            <tr>
              <TD>EN 374-4:2013</TD>
              <TD>
                Protective gloves against chemicals and micro- organisms -
                <b>
                  Pt. 4: Determination of resistance to degradation by chemicals
                </b>
              </TD>
            </tr>
            <tr>
              <TD>EN ISO 374-5:2016</TD>
              <TD>
                Protective gloves against dangerous chemicals and
                micro-organisms -{" "}
                <b>
                  Pt. 5: Terminology and performance requirements for
                  micro-organisms risks
                </b>
              </TD>
            </tr>
          </Table>
          <div style={{ width: "8px" }}></div>
          <StaticImage
            src="./CertLogos.png"
            alt="Cert logo"
            height={500}
            layout="fixed"
          />
        </Certification>
      </CertificationContainer>
      <Logos>
        <StaticImage
          src="./SCT.png"
          alt="SCT Industrial logo"
          layout="fixed"
          height={50}
        />
        <StaticImage
          src="./TripleALogoWithAlpha.png"
          alt="Triple A Logo logo"
          layout="fixed"
          height={50}
        />
      </Logos>
    </Container>
  )
}

const Container = styled.div<{ row: number }>`
  grid-row: ${props => props.row};
  grid-column: content-begin / content-end;
  margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

const CertificationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Certification = styled.div`
  flex: 0.8;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    flex: 1 !important;
    align-items: center;
  }
`

const Logos = styled.div`
  display: flex;
  > * {
    margin-right: 1.5rem;
  }
  @media (max-width: 800px) {
    margin-top: 24px;
    justify-content: center;
  }
`
