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
  TagWrapper,
} from "./layout/Typography"
import { LangContext } from "./LangContext"
import PageTurner from "../images/logo_pt.svg"

const StyledLogo = styled(PageTurner)`
  width: 10em;
`
export default function Projects_2() {
  const { lang } = useContext(LangContext)

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mockup_pt.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Section color="purple" position="middle" id="projects2" header>
      {lang === "eng" ? (
        <>
          <SubHeader>Projects</SubHeader>
          <TextArea>
            <StyledLogo />
            <Text>
              <LeadIn>“So many books, so little time”.</LeadIn> I love reading
              books. It’s one of my favorite things. The only problem I have is
              keeping track of everything I start leafing through. That’s where
              the idea for this app came from. I wanted to create something
              simple and effective by which you could track the progress of your
              reading and see your current book list in a monthly calendar: that
              visualization gives you a sense if you are underestimating your
              time and reading too many books at once.
            </Text>
            <Text>
              For this project — still in progress — I implemented a GraphQL
              server with Apollo and worked with Knex/PostgreSQL in the back
              end. The front end is in React, Ant Design and Styled Components.
            </Text>
          </TextArea>
        </>
      ) : (
        <>
          <SubHeader>Projekte</SubHeader>
          <TextArea>
            <StyledLogo />
            <Text>
              <LeadIn>&#8222;So viele Bücher, so wenig Zeit&#8220;.</LeadIn> Ich
              liebe es, Bücher zu lesen. Es ist eines meiner Lieblingssachen.
              Das einzige Problem, das ich habe, ist, alles im Auge zu behalten,
              was ich anfange zu blättern. Daher kam die Idee für diese App. Ich
              wollte etwas einfaches und effektives schaffen, mit dem man den
              Fortschritt seines Lesens verfolgen und seine gesamte aktuelle
              Liste in einem Monatskalender anzeigen könnte: Diese
              Visualisierung gibt einen ein Gefühl, wenn man die Zeit
              unterschätzt und zu viele Bücher gleichzeitig liest.
            </Text>
            <Text>
              Für dieses Projekt — noch in Bearbeitung — habe ich, im Backend,
              einen GraphQL-Server mit Apollo implementiert und mit Knex /
              PostgreSQL gearbeitet. Das Frontend ist React, Ant Design und
              Styled Components.
            </Text>
          </TextArea>
        </>
      )}
      <ImageArea>
        <Img
          fluid={image.sharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          alt="PageTurner app"
          style={{ gridArea: "image", minHeigth: "300px" }}
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fwaltrick/page-turner"
        >
          <Button>{lang === "eng" ? "Check it out" : "Guck mal"}</Button>
        </a>
        <TagWrapper>
          <TagCaption left>
            {lang === "eng" ? "Keywords" : "Stichwörter"}:
          </TagCaption>
          <Tag>React</Tag> <Tag>GraphQL</Tag> <Tag>PostgresQL</Tag>{" "}
          <Tag>Apollo</Tag> <Tag>Knex</Tag> <Tag>Ant Design</Tag>{" "}
          <Tag>Styled Components</Tag> <Tag>Parcel</Tag>{" "}
        </TagWrapper>
      </ImageArea>

      <SubFooter active={2} />
    </Section>
  )
}
