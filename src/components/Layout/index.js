import { Helmet } from "react-helmet";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopify Insights</title>
        <meta name="description" content="Shopify Insights" />
        <link rel="canonical" href="https://shopify-insights.netlify.app/" />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
