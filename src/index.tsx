import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

import App from "./App";
import Layout from "./components/Layout";

import "@shopify/polaris/dist/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Layout>
        <App />
      </Layout>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
