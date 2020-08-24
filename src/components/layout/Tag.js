import React from "react"
import styled from "styled-components"

const StyledTag = styled.button`
  display: inline-block;
  font-size: 0.6rem;
  text-transform: uppercase;
  opacity: 0.5;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 400;
  border-radius: 4px;
  color: var(--clr-black);
  padding: 0.5em 1em;
  border-width: 1px;
  border-color: rgba(39, 40, 56, 1, 0.25);
  align-self: center;

  /* &:hover,
  &:focus {
    path {
      fill: #fff;
    }
    background: var(--clr-grapefruit);
    color: #fff;
  } */
`

export default function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>
}
