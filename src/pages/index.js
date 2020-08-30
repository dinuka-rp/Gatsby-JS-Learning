import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      
      <h1>Hello there!</h1>
      <p>I'm Dinuka, living in beautiful Sri Lanka</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>

      <Footer />
    </div>
  )
}
// index is taken as the home page automatically
export default IndexPage
