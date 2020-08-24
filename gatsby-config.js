module.exports = {
  siteMetadata: {
    title: "Fabricio Waltrick's Portfolio",
    description: "Web Developer Berlin",
    author: "Fabricio Waltrick",
    // siteUrl: "https://waltrick.de",
    social: {
      github: "https://github.com/fwaltrick",
      linkedin: "https://www.linkedin.com/in/fabricio-waltrick-988352164/",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,500", "Bitter:500"],
        },
      },
    },
  ],
}
