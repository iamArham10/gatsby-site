import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  console.log(data); // Add logging to debug
  if (!data || !data.markdownRemark) {
    return <div>Loading...</div>;
  }

  const post = data.markdownRemark;

  return (
    <main>
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
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogPost;