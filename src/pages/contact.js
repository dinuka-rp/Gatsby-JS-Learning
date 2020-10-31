import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is{" "}
        <a
          href="https://www.linkedin.com/in/dinukapiyadigama/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @dinukapiyadigama
        </a>{" "}
        on LinkedIn.
      </p>
    </Layout>
  )
}

export default ContactPage
