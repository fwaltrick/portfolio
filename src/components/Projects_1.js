import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Section from "./layout/Section"
import Button from "./layout/Button"
import Tag from "./layout/Tag"
import {
  LeadIn,
  Text,
  TextArea,
  ImageArea,
  SubHeader,
  SubFooter,
  TagCaption,
  TagWrapper,
} from "./layout/Typography"
import { LangContext } from "./LangContext"
import VeganStore from "../images/logo_vs.svg"

const StyledLogo = styled(VeganStore)`
  width: 10em;
`

export default function Projects_1() {
  const { lang } = useContext(LangContext)

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mockup_vs.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section color="slate" position="middle" id="projects1" header mirror>
      <>
        {lang === "eng" ? (
          <>
            <SubHeader>Projects</SubHeader>
            <TextArea>
              <StyledLogo />
              <Text>
                <LeadIn>Full-stack projects </LeadIn>
                can be tough, but I love the challenge of putting everything
                together. They make you feel sort of a renaissance man, and
                that’s cool. Sure, switching between styling a hero and wiring
                up a database is not always easy. But I believe all that
                knowledge will make you a well-rounded professional, no matter
                if you end up being a front-end or a back-end dev.
              </Text>
              <Text>
                With this project, I filled two needs with one deed. The first
                one was to build an e-commerce app. The second, to work with the
                MERN stack (Mongo, Express, React/Next.js and Node).
              </Text>
              <Text>
                This app features server-side rendering, login/sign-up with
                JWT-based authentication and cookies, pagination, process
                payments, database maintenance, among other things.
              </Text>
            </TextArea>
          </>
        ) : (
          <>
            <SubHeader>Projekte</SubHeader>
            <TextArea>
              <StyledLogo />
              <Text>
                <LeadIn>Full-Stack-Projekte </LeadIn> können schwierig sein,
                aber ich liebe die Herausforderung, alles zusammenzustellen. Man
                fühlt sich wie ein Renaissance-Mann, und das ist cool. Natürlich
                ist es nicht einfach, zwischen Vorder- und Hintergrund ständig
                zu wechseln. Aber ich glaube, dieses Wissen macht dich zu einem
                vielseitigen Entwickler, egal ob du ein Frontend- oder ein
                Backend-Entwickler bist.
              </Text>
              <Text>
                Mit diesem Projekt habe ich zwei Bedürfnisse mit einer Tat
                erfüllt. Die erste bestand darin, eine E-Commerce-App zu
                erstellen. Die zweite, um mit dem MERN-Stack (Mongo, Express,
                React / Next.js und Node) zu arbeiten.
              </Text>
              <Text>
                Diese App bietet unter anderem serverseitiges Rendern, Anmeldung
                / Registrierung mit JWT-basierter Authentifizierung und Cookies,
                Paginierung, Prozesszahlungen und Datenbankwartung.
              </Text>
            </TextArea>
          </>
        )}
        <ImageArea>
          <Img
            fluid={image.sharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            alt="The Vegan Beauty Store app"
            style={{ gridArea: "image", minHeigth: "300px" }}
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vegan-beauty-shop.herokuapp.com/"
          >
            <Button>{lang === "eng" ? "Check it out" : "Guck mal"}</Button>
          </a>
          <TagWrapper>
            <TagCaption left>
              {lang === "eng" ? "Keywords" : "Stichwörter"}
            </TagCaption>
            <Tag>React</Tag> <Tag>Next.js</Tag> <Tag>MongoDB</Tag>{" "}
            <Tag>Express</Tag> <Tag>Node</Tag> <Tag>Ant Design</Tag>{" "}
            <Tag>SSR</Tag>{" "}
            <Tag>{lang === "eng" ? "Authentication" : "Authentifizierung"}</Tag>{" "}
            <Tag>Stripe API</Tag>{" "}
            <Tag>{lang === "eng" ? "CRUD Operations" : "CRUD Operationen"}</Tag>{" "}
            <Tag>{lang === "eng" ? "Pagination" : "Paginierung"}</Tag>{" "}
            <Tag>Responsive Design</Tag>
          </TagWrapper>
        </ImageArea>
        <SubFooter active={1} />
      </>
    </Section>
  )
}
