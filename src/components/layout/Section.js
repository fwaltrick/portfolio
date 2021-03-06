import React from "react"
import styled, { css } from "styled-components"
import Ribbon from "../../images/ribbon.svg"
import middleRibbon from "../../images/middleRibbon.svg"

const Wrapper = styled.div`
  max-width: 1000px;
`

const WrapperTop = styled.div`
  display: flex;
  justify-content: flex-end;
`

const WrapperBottom = styled.div`
  display: flex;
`

const TopRibbon = styled(Ribbon)`
  width: 65%;
  height: 65%;
  margin-top: -4em;

  @media (max-width: 800px) {
    margin-top: -3em;
  }
`

const BottomRibbon = styled(Ribbon)`
  width: 70%;
  height: 70%;
  transform: rotate(180deg);
  margin-bottom: 0;

  @media (max-width: 800px) {
    width: 80%;
    height: 80%;
  }
`

const MiddleRibbon = styled(middleRibbon)`
  width: 100%;
  height: 100%;
`

// const MiddleRibbon = styled.div`
//   transform-origin: top;
//   width: 86%;
//   height: 90px;
//   transform: skew(55deg);
//   background: var(--clr-black);

//   /* media queries to adjust ribbon bottom size */

//   @media (max-width: 1200px) {
//     width: 85%;
//   }

//   @media (max-width: 1090px) {
//     width: 83%;
//   }

//   @media (max-width: 950px) {
//     width: 81%;
//   }

//   @media (max-width: 800px) {
//     display: none;
//   }

//   /* @media (max-width: 540px) {
//     width: 75%;
//     height: 70px;
//     transform: none;
//   }

//   @media (max-width: 400px) {
//     display: none;
//   } */
// `

const Box = styled.div`
  display: grid;
  width: 100%;
  padding: 3em;
  background: ${props => "var(--clr-" + props.color + ")"};
  z-index: 10;

  @media (max-width: 800px) {
    padding: 1.5em 1.2em;
  }
`

const BoxSection = styled(Box)`
  padding: 2.2em 2em;
  grid-template:
    "header header" 2em
    "text image" 1fr
    "footer footer" auto / 1fr 1fr;
  grid-gap: 1.2em 0.7em;

  ${({ mirror }) =>
    mirror &&
    css`
      grid-template:
        "header header" 2em
        "image text" auto
        "footer footer" auto / 1fr 1fr;
    `}

  @media (max-width: 800px) {
    /* margin-top: 1em; */
    grid-row-gap: 2.5em;
    grid-template:
      "header"
      "text"
      "image"
      "footer";
  }
`

export default function Section({
  color,
  position,
  header,
  id,
  mirror,
  children,
}) {
  return (
    <Wrapper>
      {position === "first" && (
        <WrapperTop>
          <TopRibbon />
        </WrapperTop>
      )}
      {header ? (
        <BoxSection color={color} id={id} header={header} mirror={mirror}>
          {children}
        </BoxSection>
      ) : (
        <Box color={color} id={id}>
          {children}
        </Box>
      )}
      <WrapperBottom>
        {position === "last" ? <BottomRibbon /> : <MiddleRibbon />}
      </WrapperBottom>
    </Wrapper>
  )
}
