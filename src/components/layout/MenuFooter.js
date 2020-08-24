import React from "react"
import Linkedin from "../../images/footer_linkedin.svg"
import Github from "../../images/footer_github.svg"
import Mail from "../../images/footer_mail.svg"
import styled from "styled-components"

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:focus {
    outline: none;
  }
`

const Icon = styled.svg`
  width: ${props => (props.size === "mob" ? "3.2em" : "1.48em")};
  margin-left: 0.8em;
  path {
    transition: fill 0.4s ease;
  }

  &:hover,
  &:focus {
    path {
      fill: #f36653;
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    margin-left: 2em;
  }
`

export default function MenuFooter({ size }) {
  return (
    <StyledFooter>
      <a target="_blank" rel="noreferrer" href="https://github.com/fwaltrick">
        <Icon size={size} as={Github} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/fabricio-waltrick-988352164/"
      >
        <Icon size={size} as={Linkedin} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:fabricio.waltrick@gmail.com"
      >
        <Icon
          as={Mail}
          style={size === "mob" ? { width: "3.5em" } : { width: "1.7em" }}
        />
      </a>
    </StyledFooter>
  )
}
