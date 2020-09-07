import React, { useContext } from "react"
import styled, { keyframes } from "styled-components"
import Section from "./layout/Section"
import Alien from "../images/alien.svg"
import { Greet, Head, Intro, Span } from "../components/layout/Typography"
import { LangContext } from "./LangContext"

const floating = keyframes`
    from { transform: translate(0,  0px); }
    60%  { transform: translate(0, 25px); }
    to   { transform: translate(0, 0px); }    
`

const shadow = keyframes`
    from { transform: scaleX(1); }
    60%  { transform: scaleX(0.95); }
    to   { transform: scaleX(1); } 
`

const StyledAlien = styled(Alien)`
  margin-left: -2px;
  width: 0.95em;

  & #spaceship {
    animation: ${floating} 1.5s infinite ease-in-out;
  }

  & #shadow {
    transform-origin: center;
    animation: ${shadow} 1.5s infinite ease-in-out;
  }

  /* &:hover {
    transform: rotate(15deg) scale(1.2);
  } */
`

export default function Hi() {
  const { lang } = useContext(LangContext)

  return (
    <Section color="slate" position="first" id="hi">
      {lang === "eng" ? (
        <>
          <Greet>
            Hi! <StyledAlien />
          </Greet>
          <Head>
            My name is <Span color="yellow">Fabricio Waltrick</Span> and I am a
            developer.
          </Head>
          <Intro>
            I'm based in Berlin, where I am constantly experimenting with new
            tools and technologies, and working with
            <Span color="yellow"> Javascript</Span> in many shapes and forms —
            especially
            <Span color="yellow"> React</Span>.
          </Intro>
        </>
      ) : (
        <>
          <Greet style={{ letterSpacing: "3px" }}>
            Hallo! <StyledAlien />
          </Greet>
          <Head>
            Ich heiße <Span color="yellow">Fabricio Waltrick</Span> und ich bin
            ein Entwickler.
          </Head>
          <Intro>
            Ich lebe in Berlin, wo ich ständig mit neuen Technologien und
            Werkzeugen experimentiere, und mit{" "}
            <Span color="yellow">Javascript</Span> und seine Varianten mich
            beschäftige — insbesondere <Span color="yellow">React</Span>.
          </Intro>
        </>
      )}
    </Section>
  )
}
