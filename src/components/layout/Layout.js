import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"
import Menu from "./Menu"
import useSiteMetadata from "../hooks/useSiteMetadata"

const GlobalStyle = createGlobalStyle`

:root {
  font: 1rem/1.6 'Roboto', sans-serif;
  font-weight: 300;
  --clr-salmon: #FFD6C7;
  --clr-blue: #3BACF7;
  --clr-green: #329F5B;
  --clr-purple: #9B77AC;
  --clr-amethyst: #A961C9;
  --clr-grapefruit: #F36653;
  --clr-yellow: #FFEC51;
  --clr-lilac: #B59AC1;
  --clr-gray: #707070;
  --clr-darkgray: #4B4D6C;
  --clr-black: #272838;
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
    background: var(--clr-grapefruit);
  }

   &:hover {
    color: var(--clr-grapefruit);
  }
}

.current_hi {
  &&&{
    color: var(--clr-blue);

  & > div {
    background: var(--clr-blue);
  }
  }
}

.current_about {
  &&& {
    color: var(--clr-green);

  & > div {
    background: var(--clr-green);
  }
  }
}

.current_projects {
  &&&{
    color: var(--clr-amethyst);

  & > div {
    background: var(--clr-amethyst);
  }
  }
}
       
`

const Main = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "nav main";
  grid-gap: 3em;
  color: #fff;

  @media screen and (max-width: 900px) {
    grid-gap: 1.5em;
  }

  @media screen and (max-width: 800px) {
    grid-row-gap: unset;
    grid-template-areas:
      "nav"
      "main";
    grid-template-rows: 3em 1fr;
  }
  /* REMINDER: CHANGE HERE FOR MOBILE    */
`

const ContentWrapper = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 950px;
  min-width: 650px;

  @media screen and (max-width: 800px) {
    min-width: 100vw;
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
