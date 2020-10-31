import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

const BlogPage = () => {
  // get data from markdown files in file system
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      {/* <p>Posts will show up here later on.</p> */}
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
// the file name is taken as the url link
export default BlogPage
