import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"
import Menu from "./Menu"
import useSiteMetadata from "../hooks/useSiteMetadata"

const GlobalStyle = createGlobalStyle`

:root {
  font: 1rem/1.6 'Roboto', sans-serif;
  font-weight: 300;
  --clr-salmon: #f0ece2;
  --clr-slate: #6b778d;
  --clr-pink: #e14594;
  --clr-yellow: #ffd700;
  --clr-silver: #929aa8;
  --clr-gray: #A2AAB9;
  --clr-darkgray: #034163;
  --clr-black: #1b262c;
}


*,
*::before,
*::after {
  font-family: inherit;
  box-sizing: border-box;
  
}

*:focus {
    outline: none;
}

body {
  margin: 0;
  background: var(--clr-salmon);

a {
  text-decoration: none;
}

}


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Bitter', serif;
  margin: 0;
}

p {
  margin-top: 0.5em;
}

 .current {
  & > div {
    background: var(--clr-pink);
  }

   &:hover {
    color: var(--clr-pink);
  }
}

.current_hi {
  &&&{
    color: var(--clr-pink);

  & > div {
    background: var(--clr-pink);
  }
  }
}

.current_about {
  &&& {
    color: var(--clr-pink);

  & > div {
    background: var(--clr-pink);
  }
  }
}

.current_projects {
  &&&{
    color: var(--clr-pink);

  & > div {
    background: var(--clr-pink);
  }
  }
} 
`

const Main = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "nav content";
  grid-gap: 2.5em;
  grid-template-columns: 1fr 5fr;
  color: #fff;

  @media screen and (max-width: 900px) {
    grid-gap: 1.5em;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: unset;
    grid-row-gap: unset;
    grid-template-areas:
      "nav"
      "content";
    grid-template-rows: 3em 1fr;
  }
`

const ContentWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 950px;
  min-width: 650px;

  @media screen and (max-width: 800px) {
    min-width: 95%;
    max-width: 95%;
    margin: 0 auto;
  }
`

const MenuWrapper = styled(Menu)`
  grid-area: nav;

  @media screen and (max-width: 800px) {
  }
`

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <GlobalStyle />
      <Helmet lang="en">
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Main>
        <MenuWrapper />
        <ContentWrapper>{children}</ContentWrapper>
      </Main>
    </>
  )
}
