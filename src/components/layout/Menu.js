import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import MenuFooter from "./MenuFooter"
import { Caption } from "../layout/Typography"
import ToggleLang from "./ToggleLang"
import { LangContext } from "../LangContext"

const Item = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: bottom;

  && {
    & > a:hover {
      cursor: pointer;
      color: var(--clr-grapefruit);
    }

    && {
      & a:hover > * {
        cursor: pointer;
        background: var(--clr-grapefruit);
      }
    }

    & a {
      color: var(--clr-black);
      text-decoration: none;
    }

    @media screen and (max-width: 800px) {
      font-size: 2em;

      & a {
        color: var(--clr-darkgray);
        text-decoration: none;
      }
    }
  }
`

const Circle = styled.div`
  font-family: "Bitter", serif;
  display: inline-block;
  margin-left: 0.5rem;
  width: ${props => (props.size === "desk" ? "1.5rem" : "3rem")};
  height: ${props => (props.size === "desk" ? "1.5rem" : "3rem")};
  border-radius: 50%;
  font-size: ${props => (props.size === "desk" ? "0.75rem" : "1.5rem")};
  color: #fff;
  line-height: 2.1;
  text-align: center;
  background: #4b4d6c;
`

// Desktop Navigation
const NavDesk = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 40vh;
  margin-left: 0.5em;
  max-height: 300px;
  min-height: 200px;
  transform: translateY(-50%);
  top: 50%;
`

const StyledListDesk = styled.ul`
  list-style: none;
  font-size: 1.1rem;
  line-height: 2.1;
  padding-left: 0;
  text-align: right;
  margin: 0;
`

//  Mobile Navigation
const NavBarMob = styled.nav`
  background: var(--clr-salmon);
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0.5em 1em;
`

const StyledListMob = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 0.8rem;
  height: 100%;
  align-items: flex-end;
  justify-content: space-around;
  margin: 0;
  padding: 2.5em;
`

const NavMob = styled.div`
  position: fixed;
  background: var(--clr-yellow);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
`

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  && {
    &:hover {
      color: var(--clr-grapefruit);
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--clr-darkgray);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-black);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

let defaultWidth = 0

if (typeof window !== "undefined") {
  defaultWidth = window.innerWidth
}

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(defaultWidth)
  const { lang, setLang } = useContext(LangContext)

  const breakpoint = 800

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
        if (width > breakpoint) {
          setOpen(false)
        }
      })

      return () => {
        window.removeEventListener("resize", listener)
      }
    }
  }, [width])

  const toggleLanguage = () => setLang(lang === "eng" ? "deu" : "eng")

  return (
    <>
      {width > breakpoint ? (
        <NavDesk>
          <StyledListDesk>
            <Item>
              <Link
                activeClass="current current_hi"
                to="hi"
                spy={true}
                smooth={true}
                duration={500}
              >
                {lang === "eng" ? "Hi" : "Hallo"}
                <Circle size="desk">1</Circle>
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="current current_about"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                {lang === "eng" ? "About Me" : "Über Mich"}
                <Circle size="desk">2</Circle>
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="current current_projects"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                {lang === "eng" ? "Projects" : "Projekte"}
                <Circle size="desk">3</Circle>
              </Link>
            </Item>
          </StyledListDesk>
          <ToggleLang onClick={toggleLanguage}></ToggleLang>
          <div>
            <Caption>{lang === "eng" ? "Get in touch" : "Kontakt"}</Caption>
            <MenuFooter />
          </div>
        </NavDesk>
      ) : (
        <NavBarMob>
          <Burger open={open} setOpen={setOpen} />
          <div>
            <ToggleLang onClick={toggleLanguage}></ToggleLang>
          </div>
          <NavMob open={open} setOpen={setOpen}>
            <StyledListMob onClick={() => setOpen(false)}>
              <Item>
                <Link
                  onClick={() => setOpen(false)}
                  offset={-50}
                  activeClass="current current_hi"
                  to="hi"
                >
                  {lang === "eng" ? "Hi" : "Hallo"}
                  <Circle size="mob">1</Circle>
                </Link>
              </Item>
              <Item>
                <Link
                  onClick={() => setOpen(false)}
                  offset={-45}
                  activeClass="current current_about"
                  to="about"
                >
                  {lang === "eng" ? "About Me" : "Über Mich"}
                  <Circle size="mob">2</Circle>
                </Link>
              </Item>
              <Item>
                <Link
                  onClick={() => setOpen(false)}
                  offset={-45}
                  activeClass="current current_projects"
                  to="projects"
                >
                  {lang === "eng" ? "Projects" : "Projekte"}
                  <Circle size="mob">3</Circle>
                </Link>
              </Item>
              <MenuFooter size="mob" />
            </StyledListMob>
          </NavMob>
        </NavBarMob>
      )}
    </>
  )
}
