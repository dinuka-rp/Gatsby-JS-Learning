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

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
