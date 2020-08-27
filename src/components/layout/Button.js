import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
  text-transform: uppercase;
  align-items: center;
  letter-spacing: 3px;
  font-weight: lighter;
  border-radius: 4px;
  background-color: var(--clr-darkgray);
  color: #fff;
  border: none;
  padding: 1em 1.5em;
  cursor: pointer;
  transition: all 0.5s;
  align-self: center;
  margin: 2em auto;
  text-decoration: none;

  &:hover,
  &:focus {
    path {
      fill: #fff;
    }
    background: var(--clr-pink);
    color: #fff;
  }
`

export default function Button({ children }) {
  return (
    <div>
      <StyledButton>{children}</StyledButton>
    </div>
  )
}
