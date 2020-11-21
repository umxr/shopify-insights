import React from "react";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Shopify Insights</title>
        <meta name="description" content="Shopify Insights" />
        <link rel="canonical" href="https://shopify-insights.netlify.app/" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
