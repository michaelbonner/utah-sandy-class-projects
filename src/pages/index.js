import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import ProjectNumber from "../components/project-number"

const IndexPage = () => (
  <Layout>
    <ProjectNumber number="1" />
    <ProjectNumber number="2" />
    <ProjectNumber number="3" />
  </Layout>
)

export const Head = () => <Seo title="Class Projects" />

export default IndexPage
