import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../src/components/seo.js";

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <main>
      <SEO
        title="Home"
        description="This is a homepage of our Gatsby site. Optimized for SEO"
      />
      <h1>Welcome to my Gatsby site!</h1>
      <p>This is a homepage of our Gatsby site.</p>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/posts/${node.id}`}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default HomePage;
