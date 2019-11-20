module.exports = {
  siteMetadata: {
    title: `Shirtastic Starter`,
    description: `This project presents capability of using JAM stack. You are going to learn how to set up the server-less project with outstanding performance. We will go through the steps that familiarize us with GatsbyJS, GraphQL and Netlify CMS. In the end of our bootcamp we'll deploy our project to Netlify`,
    contacts: {
      email: "info@dev6.com",
      phone: "+1 (000) 000 0000",
    },
    author: `dev6`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/t-shirts/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
