import React, { useState } from "react"
import Layout from "../components/layout/Layout"
import Hi from "../components/Hi"
import About from "../components/About"
import Projects_1 from "../components/Projects_1"
import Projects_2 from "../components/Projects_2"
import Projects_3 from "../components/Projects_3"
import Projects_4 from "../components/Projects_4"
import { LangContext } from "../components/LangContext"

export default function Home() {
  const [lang, setLang] = useState("eng")
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Layout>
        <Hi />
        <About />
        <section id="projects">
          <Projects_1 />
          <Projects_2 />
          <Projects_3 />
          <Projects_4 />
        </section>
      </Layout>
    </LangContext.Provider>
  )
}
