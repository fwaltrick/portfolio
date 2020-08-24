import React from "react"
import Layout from "../components/layout/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div
        style={{
          padding: "6em",
          background: "var(--clr-grapefruit)",
        }}
      >
        <h1>NOT FOUND </h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
