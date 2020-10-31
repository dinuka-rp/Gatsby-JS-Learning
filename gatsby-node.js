const path = require("path")

// https://www.gatsbyjs.com/docs/node-apis/#onCreateNode
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === "MarkdownRemark") {
    // console.log(JSON.stringify(node, undefined, 4))

    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(">>>>>>>>>", slug)

    // adding a new field to the node
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// create dynamic pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // get path to the new template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // graphql paased here is a function - different from what's used in other places
  const res = await graphql(`
    query{
      allMarkdownRemark {
        edges {
          node {
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        // stuff that we can pass down to the template
        slug: edge.node.fields.slug,
      },
    })
  })
}
