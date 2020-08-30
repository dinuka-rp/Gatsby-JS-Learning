import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />

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

      <Footer />
    </div>
  )
}

export default ContactPage
