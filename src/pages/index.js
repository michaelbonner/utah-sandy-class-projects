import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectNumber from "../components/project-number"

const IndexPage = () => (
  <Layout>
    <SEO title="Class Projects" />
    <ProjectNumber number="1" />
    <ProjectNumber number="2" />
    <ProjectNumber number="3" />
  </Layout>
)

export default IndexPage
