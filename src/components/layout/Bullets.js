import React from "react"
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
`
const Circle = styled.div`
  font-family: "Bitter", serif;
  font-size: 0.6rem;
  padding: 0.7rem;
  color: var(--clr-darkgray);
  background: ${props =>
    props.active ? "var(--clr-yellow)" : "var(--clr-lilac)"};
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
      props.active ? "var(--clr-yellow)" : "var(--clr-grapefruit)"};
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
      fill: var(--clr-grapefruit);
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
  return (
    <div>
      <Wrapper>
        {(active === 2 || active === 3 || active === 4) && (
          <StyledLink to={`projects${active - 1}`} smooth={true} duration={500}>
            <Up />
          </StyledLink>
        )}
        <WrapperBullets>
          <StyledLink to="projects1" smooth={true} duration={500}>
            <Circle active={active === 1}>I</Circle>
          </StyledLink>
          <StyledLink to="projects2" smooth={true} duration={500}>
            <Circle active={active === 2}>II</Circle>
          </StyledLink>
          <StyledLink to="projects3" smooth={true} duration={500}>
            <Circle active={active === 3}>III</Circle>
          </StyledLink>
          <StyledLink to="projects4" smooth={true} duration={500}>
            <Circle active={active === 4}>IV</Circle>
          </StyledLink>
        </WrapperBullets>
        {(active === 1 || active === 2 || active === 3) && (
          <StyledLink to={`projects${active + 1}`} smooth={true} duration={500}>
            <Down />
          </StyledLink>
        )}
      </Wrapper>
    </div>
  )
}
