/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>this is top page</h1>
  </Layout>
)

export default IndexPage
