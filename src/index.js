import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import "@shopify/polaris/dist/styles.css";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopify Insights</title>
        <meta name="description" content="Shopify Insights" />
        <link rel="canonical" href="https://shopify-insights.netlify.app/" />
      </Helmet>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
