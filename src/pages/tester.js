import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Tester = () => (
  <Layout>
    <h1>The Title</h1>
    <p>Jus testing</p>
    <p>
      <Link to="/">Back to Home</Link>
    </p>
  </Layout>
)

export default Tester
