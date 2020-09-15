import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./header.module.scss"
import HeaderStyles from "./header.module.scss" // css module

const Header = () => {
  // query and store data from graphql api
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link to="/" className={HeaderStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              to="/"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
