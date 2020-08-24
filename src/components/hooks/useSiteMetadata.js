import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
