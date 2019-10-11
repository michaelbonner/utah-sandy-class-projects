module.exports = {
  siteMetadata: {
    title: `Utah Sandy Campus T-Th Class Project 1`,
    description: `A little site to show all the class projects from project 1`,
    author: `@fictiveweb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `university-bootcamp`,
        short_name: `university-bootcamp`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#D3003F`,
        display: `minimal-ui`,
        icon: `src/images/block-u.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
