import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "./layout/Button"
import Tag from "./layout/Tag"
import Section from "./layout/Section"
import {
  LeadIn,
  Text,
  ImageArea,
  TextArea,
  SubHeader,
  SubFooter,
  TagCaption,
} from "./layout/Typography"
import { LangContext } from "./LangContext"
import RomanCalculator from "../images/logo_rc.svg"

const StyledLogo = styled(RomanCalculator)`
  width: 10em;
`

export default function Projects_3() {
  const { lang } = useContext(LangContext)

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mockup_rc.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section color="purple" position="middle" id="projects3" header mirror>
      {lang === "eng" ? (
        <>
          <SubHeader>Projects</SubHeader>
          <TextArea>
            <StyledLogo />
            <Text>
              <LeadIn>Throughout my career</LeadIn> I worked on projects related
              to education. This is a subject dear to my heart and the reason
              why I had great fun doing this simple project: a calculator that
              can add, subtract and multiply Roman numerals.
            </Text>
            <Text>
              For the UI, I used React and SVG, and Javascript to handle
              calculations and validations (with Regex). And I also included
              unit testing with Jest and React Testing Library.
            </Text>
          </TextArea>
        </>
      ) : (
        <>
          <SubHeader>Projekte</SubHeader>
          <TextArea>
            <StyledLogo />
            <Text>
              <LeadIn>Während meiner Karriere</LeadIn> habe ich immer an
              Projekten im Zusammenhang mit Bildung gearbeitet. Dies ist ein
              Thema, das mir sehr am Herzen liegt und der Grund, warum ich
              großen Spaß an diesem einfachen Projekt hatte: einem
              Taschenrechner, der römische Ziffern addieren, subtrahieren und
              multiplizieren kann.
            </Text>
            <Text>
              Ich habe React Hooks und SVG für die Benutzeroberfläche und
              Javascript verwendet, um Berechnungen und Überprüfungen (mit
              Regex) durchzuführen. Dazu gehörten auch Unit-Tests mit Jest and
              React Testing Library.
            </Text>
          </TextArea>
        </>
      )}
      <ImageArea>
        <Img
          fluid={image.sharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          alt="Roman Calculator App"
          style={{ gridArea: "image", maxWidth: "410px" }}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://fwaltrick.github.io/roman-calculator/"
        >
          <Button>{lang === "eng" ? "Check it out" : "Guck mal"}</Button>
        </a>
        <div style={{ margin: "1em 2.2em" }}>
          <TagCaption left>
            {lang === "eng" ? "Keywords" : "Stichwörter"}:
          </TagCaption>{" "}
          <Tag>React</Tag> <Tag>JavaScript</Tag> <Tag>SVG</Tag> <Tag>Jest</Tag>{" "}
          <Tag>React Test Library</Tag> <Tag>Parcel</Tag>{" "}
        </div>
      </ImageArea>

      <SubFooter active={3} />
    </Section>
  )
}
