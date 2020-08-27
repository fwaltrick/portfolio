import React from "react"
import styled from "styled-components"
import Bullets from "./Bullets"

export const Greet = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;

  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
`

export const Head = styled.p`
  font-size: 1.9rem;
  margin-bottom: 0.5em;

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
`

export const Intro = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5em;

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`

export const Caption = styled.span`
  font-size: 0.6rem;
  text-transform: uppercase;
  color: var(--clr-black);
  letter-spacing: 3px;
  display: flex;
  justify-content: ${({ left }) => (left ? "flex-start" : "flex-end")};
`

export const TagCaption = styled.p`
  font-family: "Bitter", serif;
  font-size: 1rem;
  text-shadow: 1px 1px var(--clr-darkgray);
  color: var(--clr-yellow);
  margin-bottom: 0.2em;
`

export const TagWrapper = styled.div`
  margin: 1.2em;
  margin-bottom: 0;
  padding: 1em;
  border-radius: 9px;
  border: 0.5px;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`

export const Span = styled.span`
  font-family: "Bitter", serif;
  color: ${props => "var(--clr-" + props.color + ")"};
  font-size: ${props => (props.size ? props.size + "rem" : "inherit")};
  /* text-shadow: ${props =>
    props.shadow ? "2.5px 2.5px var(--clr-darkgray)" : "none"}; */
  letter-spacing: 0.5px;
`

export const LeadIn = styled.span`
  font-family: "Bitter", serif;
  font-size: 1.5rem;

  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`

export const Text = styled.p`
  font-size: 1.1rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`

export const TextArea = styled.div`
  grid-area: text;
`
export const ImageArea = styled.div`
  grid-area: image;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SubHeaderText = styled.h4`
  display: inline-block;
  font-size: 0.9rem;
  color: var(--clr-black);
  opacity: 0.9;
  padding: 0.1em 0.5em;
  background: rgba(255, 255, 255, 0.4);
`

const SubHeaderArea = styled.div`
  grid-area: header;
`

const SubFooterArea = styled.div`
  grid-area: footer;
  margin: 0 auto;
`

export const SubHeader = ({ children }) => (
  <SubHeaderArea>
    <SubHeaderText>{children}</SubHeaderText>
  </SubHeaderArea>
)

export const SubFooter = ({ active }) => (
  <SubFooterArea>
    <Bullets active={active}></Bullets>
  </SubFooterArea>
)
