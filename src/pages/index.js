import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
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
