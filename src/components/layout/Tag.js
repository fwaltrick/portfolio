import React from "react"
import styled from "styled-components"

const StyledTag = styled.button`
  display: inline-block;
  font-size: 0.75rem;
  margin: 0.2rem 0;
  text-transform: uppercase;
  background: transparent;
  align-items: center;
  letter-spacing: 3px;
  font-weight: 400;
  border-radius: 4px;
  color: #fff;
  padding: 0.5em 1em;
  border: 1px solid var(--clr-gray);
  align-self: center;

  /* &:hover,
  &:focus {
    path {
      fill: #fff;
    }
    background: var(--clr-pink);
    color: #fff;
  } */
`

export default function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>
}
