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
  Span,
  TagCaption,
  TagWrapper,
} from "./layout/Typography"
import { LangContext } from "./LangContext"
import Portfolio from "../images/logo_port.svg"

const StyledLogo = styled(Portfolio)`
  width: 10em;
`

export default function Projects_4() {
  const { lang } = useContext(LangContext)

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mockup_port.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Section color="slate" position="last" id="projects4" header>
      {lang === "eng" ? (
        <>
          <SubHeader>Projects</SubHeader>
          <TextArea>
            <StyledLogo />
            <Text>
              <LeadIn>This is so meta, right?</LeadIn> I know! I only included
              this very portfolio in my list because <Span>(1)</Span> I didn’t
              resort to any template for the task and <Span>(2)</Span> it was a
              chance to work with Gatsby (and I must say, I loved it).
            </Text>
            <Text>
              For the layout of the page, I had the idea of creating a stylized
              ribbon as a single container for the content, with a smooth
              scrolling navigation.
            </Text>

            <Text>
              I hope you liked it!{" "}
              <span role="img" aria-label="fingers crossed">
                🤞
              </span>
            </Text>
          </TextArea>
        </>
      ) : (
        <>
          <SubHeader>Projekte</SubHeader>
          <TextArea>
            <StyledLogo />
            <Text>
              <LeadIn>Das ist so meta, oder?</LeadIn> Ich weiß! Ich habe nur
              dieses Portfolio in meine Liste aufgenommen, weil <Span>(1)</Span>{" "}
              ich auf keine Vorlage zurückgegriffen habe und <Span>(2)</Span> es
              eine Gelegenheit war, mit Gatsby zu arbeiten (und ich muss sagen,
              es war super).
            </Text>
            <Text>
              Für das Layout der Seite hatte ich die Idee, ein stilisiertes Band
              als einzelnen Container für den Inhalt zu erstellen, mit
              animierten Scrollen.
            </Text>
            <Text>
              Ich hoffe, es hat euch gefallen!{" "}
              <span role="img" aria-label="fingers crossed">
                🤞
              </span>
            </Text>
          </TextArea>
        </>
      )}
      <ImageArea>
        <Img
          fluid={image.sharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          alt="Portfolio"
          style={{ gridArea: "image", minHeigth: "300px" }}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fwaltrick/portfolio"
        >
          <Button>{lang === "eng" ? "Check it out" : "Guck mal"}</Button>
        </a>
        <TagWrapper>
          <TagCaption left>
            {lang === "eng" ? "Keywords" : "Stichwörter"}
          </TagCaption>{" "}
          <Tag>Gatsby</Tag> <Tag>React</Tag> <Tag>Styled Components</Tag>{" "}
          <Tag>SVG</Tag> <Tag>Responsive Design</Tag>{" "}
        </TagWrapper>
      </ImageArea>

      <SubFooter active={4} />
    </Section>
  )
}
