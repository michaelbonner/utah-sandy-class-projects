import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Image = (props) => (
  <StaticQuery
    query={graphql`
      {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 600, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          {...props}
          alt={props.alt}
        />
      )
    }}
  />
)

export default Image
