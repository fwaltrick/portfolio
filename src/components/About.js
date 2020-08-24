import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Section from "./layout/Section"
import {
  Text,
  TextArea,
  LeadIn,
  SubHeader,
  Span,
  ImageArea,
} from "./layout/Typography"
import { LangContext } from "./LangContext"

export default function About() {
  const { lang } = useContext(LangContext)

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "aboutme.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section color="green" position="middle" id="about" header>
      <>
        {lang === "eng" ? (
          <>
            <SubHeader>About Me</SubHeader>
            <TextArea>
              <Text>
                <LeadIn>Some years ago</LeadIn> I moved from São Paulo to Berlin
                eager to experience a new culture and expand my worldview. But
                definitely, the biggest move in my life happened sometime later
                when I decided to make a career change. Graduated in Publishing,
                I worked for years as an editor — and subsequent manager — in
                one of the largest publishing groups in Brazil.
              </Text>
              <Text>
                After moving to Germany, I decided to begin a new path and got
                into a{" "}
                <Span color="black">Full-stack Development Bootcamp</Span>: an
                intensive full-time five-month program, where I learned front-
                and back-end development in a hands-on approach. Since then,
                I’ve been honing my knowledge — especially regarding to
                JavaScript and React — and continuously learning new skills,
                tools, frameworks and platforms.
              </Text>
            </TextArea>
          </>
        ) : (
          <>
            <SubHeader>Über Mich</SubHeader>
            <TextArea>
              <Text>
                <LeadIn>Vor einigen Jahren </LeadIn> bin ich von São Paulo nach
                Berlin gezogen, um eine neue Kultur kennenzulernen und mein
                Weltbild zu erweitern. Aber definitiv ist der größte Schritt in
                meinem Leben etwas später geschehen, als ich mich beschlossen
                habe, Karriere zu wechseln. Nach meinem Abschluss im Publishing,
                habe ich jahrelang als Lektor — und anschließend als Manager —
                bei einer der größten Verlagsgruppen in Brasilien gearbeitet.
              </Text>
              <Text>
                Nach meinem Unzug nach Deutschland habe ich mich für einen neuen
                Weg entschieden und in ein
                <Span color="black">
                  {" "}
                  Full-Stack-Entwicklungs-Bootcamp
                </Span>{" "}
                eingestiegen: ein intensives fünfmonatiges Vollzeitprogramm, in
                dem ich die Front- und Back-End-Entwicklung in einem praktischen
                Ansatz gelernt habe. Seitdem habe ich mein Wissen — insbesondere
                in Bezug auf JavaScript und React — erweitert und ständig neue
                Fähigkeiten, Werkzeuge, Frameworks und Plattformen erlernt.
              </Text>
            </TextArea>
          </>
        )}
        <ImageArea>
          <Img
            fluid={image.sharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            alt="Collage: São Paulo, Berlin, books"
            style={{ gridArea: "image", minHeigth: "300px" }}
          />
        </ImageArea>
      </>
    </Section>
  )
}
