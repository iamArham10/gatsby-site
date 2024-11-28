const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("./src/templates/blog-post.js");

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(`Creating page for ${node.id}`); // Add logging
    createPage({
      path: `/posts/${node.id}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};