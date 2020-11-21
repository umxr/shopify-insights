import React from "react";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import Layout from "../components/Layout";

import "@shopify/polaris/dist/styles.css";

const App = ({ Component, pageProps }) => {
  return (
    <AppProvider i18n={enTranslations}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default App;
