import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello there!</h1>
      <p>I'm Dinuka, living in beautiful Sri Lanka</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
// index is taken as the home page automatically
export default IndexPage
