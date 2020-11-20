import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";
import React from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
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
