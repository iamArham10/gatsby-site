import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  const defaultTitle = "My Gatsby Site"; // Set your default title here
  const defaultDescription = "This is a Gatsby site optimized for SEO";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
