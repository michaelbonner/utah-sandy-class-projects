/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang="en" />
      <title>
        {title} | {site.siteMetadata.title}
      </title>

      <link
        rel="canonical"
        href="https://utah-sandy-class-projects.vercel.app/"
      />

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={`website`} />
      <meta
        property="og:url"
        content={`https://utah-sandy-class-projects.vercel.app/`}
      />
      <meta property="og:image" content={"/og-image.jpg"} />
      <meta property="image" content={"/og-image.jpg"} />
      <meta name="twitter:card" content={`summary`} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}
