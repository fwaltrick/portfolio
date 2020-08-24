import React, { useContext } from "react"
import styled from "styled-components"
import { LangContext } from "../LangContext"

const Wrapper = styled.div`
  display: flex;
`
const Back = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.2em;
`
const Toggle = styled.span``

const Label = styled.span``

const LabelEn = styled.span``

const LabelDe = styled.span``

const ToggleLabel = styled.label`
  font-family: "Bitter", serif;
  font-size: 0.95rem;
  position: relative;
  cursor: pointer;
  display: flex;
  width: 4em;
  height: 2em;

  & input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;    
  }

  & input[type="checkbox"] + ${Back} {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f36653;
    transition: background 150ms linear;
  }

  & input[type="checkbox"]:checked + ${Back} {
    background: #f36653;
  }

  & input[type="checkbox"] + ${Back} ${Toggle} {
    display: block;
    position: absolute;
    content: " ";
    background: #4b4d6c;
    width: 50%;
    height: 100%;
    border-radius: 0.2em;
    transition: margin 150ms linear;
  }

  & input[type="checkbox"]:checked + ${Back} ${Toggle} {
    margin-left: 2em;
  }

  & ${Label}{
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    color: #ddd;
    font-size: 1em;
  }

  & ${Label}${LabelEn} {
    left: 0px;
  }

  & ${Label}${LabelDe} {
    right: 0px;
  }

  & input[type="checkbox"]:checked + ${Back} ${Label} ${LabelEn} {
    color: #fff;
  }

  & input[type="checkbox"] + ${Back} ${Label} ${LabelEn} {
    color: #707070;
  }

  & input[type="checkbox"] + ${Back} ${LabelDe} {
    color: #fff;
  }

  & input[type="checkbox"]:checked + ${Back} ${LabelDe} {
    color: #707070;
  }
`

export default function ToggleLang({ onClick }) {
  const { lang } = useContext(LangContext)
  return (
    <Wrapper>
      <ToggleLabel>
        <input type="checkbox" onChange={onClick} checked={lang === "eng"} />
        <Back>
          <Toggle></Toggle>
          <Label>
            <LabelEn>EN</LabelEn>
            <LabelDe>DE</LabelDe>
          </Label>
        </Back>
      </ToggleLabel>
    </Wrapper>
  )
}
