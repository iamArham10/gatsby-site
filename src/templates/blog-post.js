import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo.js";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <main>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogPost;
