import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import Arrow from "../../images/chevron.svg"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const WrapperBullets = styled.div`
  display: flex;
  justify-content: space-around;
  width: 9em;

  @media screen and (max-width: 800px) {
    width: 12em;
  }
`
const Circle = styled.div`
  font-family: "Bitter", serif;
  font-size: 0.6rem;
  padding: 0.8rem;
  color: var(--clr-black);
  background: ${props =>
    props.active ? "var(--clr-yellow)" : "var(--clr-silver)"};
  height: 0.9rem;
  width: 0.9rem;
  line-height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background: ${props =>
      props.active ? "var(--clr-yellow)" : "var(--clr-pink)"};
  }

  @media screen and (max-width: 800px) {
    font-size: 0.7rem;
    padding: 1rem;
    height: 1.2rem;
    width: 1.2rem;
    line-height: 2.2rem;
  }
`

const StyledLink = styled(Link)`
  cursor: pointer;
`

const StyledArrow = styled(Arrow)`
  width: 1.3em;

  &:hover,
  &:focus {
    path {
      fill: var(--clr-pink);
    }
  }
`
const Up = styled(StyledArrow)`
  margin-right: 1em;
  transform: rotate(180deg);
`

const Down = styled(StyledArrow)`
  width: 1.3em;
  margin-left: 1em;
`

export default function Bullets({ active }) {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
        if (width >= 800) {
        }
      })

      return () => {
        window.removeEventListener("resize", listener)
      }
    }
  }, [width])

  return (
    <div>
      <Wrapper>
        {(active === 2 || active === 3 || active === 4) && (
          <StyledLink to={`projects${active - 1}`} smooth={true} duration={500}>
            <Up />
          </StyledLink>
        )}
        <WrapperBullets>
          <StyledLink
            to="projects1"
            smooth={true}
            duration={500}
            offset={width <= 800 ? -45 : 0}
          >
            <Circle active={active === 1}>I</Circle>
          </StyledLink>
          <StyledLink
            to="projects2"
            smooth={true}
            duration={500}
            offset={width <= 800 ? -45 : 0}
          >
            <Circle active={active === 2}>II</Circle>
          </StyledLink>
          <StyledLink
            to="projects3"
            smooth={true}
            duration={500}
            offset={width <= 800 ? -45 : 0}
          >
            <Circle active={active === 3}>III</Circle>
          </StyledLink>
          <StyledLink
            to="projects4"
            smooth={true}
            duration={500}
            offset={width <= 800 ? -45 : 0}
          >
            <Circle active={active === 4}>IV</Circle>
          </StyledLink>
        </WrapperBullets>
        {(active === 1 || active === 2 || active === 3) && (
          <StyledLink
            to={`projects${active + 1}`}
            smooth={true}
            duration={500}
            offset={width <= 800 ? -45 : 0}
          >
            <Down />
          </StyledLink>
        )}
      </Wrapper>
    </div>
  )
}
