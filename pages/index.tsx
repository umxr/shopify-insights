import React, { useCallback, useEffect, useState } from "react";
import { Devices } from "../config/types";
import { PagespeedApiResponse } from "../config/types";
import run from "../utils/run";
import {
  Button,
  Card,
  Form,
  FormLayout,
  InlineError,
  Layout,
  Page,
  Spinner,
  TextField,
} from "@shopify/polaris";
import AuditResults from "../components/AuditResults";
import DeviceSelector from "..//components/DeviceSeletor";

const Home = () => {
  const [device, setDevice] = useState<Devices>(Devices.Desktop);
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<PagespeedApiResponse[] | null>(null);
  const [homePage, setHomepage] = useState<string>("");
  const [homePageError, setHomePageError] = useState<boolean>(false);
  const [productPage, setProductPage] = useState<string>("");
  const [productPageError, setProductPageError] = useState<boolean>(false);
  const [collectionPage, setCollectionPage] = useState<string>("");
  const [collectionPageError, setCollectionPageError] = useState<boolean>(
    false
  );
  const [listCollectionsPage, setListCollectionsPage] = useState<string>("");
  const [blogPage, setBlogPage] = useState<string>("");
  const [articlePage, setArticlePage] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [cartPage, setCartPage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleDeviceChange = useCallback((value) => setDevice(value), []);
  const validateHomePage = (value: string) => {
    if (!value) {
      setHomePageError(true);
    } else {
      setHomePageError(false);
    }
  };
  const handleHomePageChange = useCallback((value) => {
    validateHomePage(value);
    setHomepage(value);
  }, []);
  const handleHomePageBlur = () => {
    validateHomePage(homePage);
  };
  const handleHomePageFocus = () => {
    validateHomePage(homePage);
  };
  const validateProductPage = (value: string) => {
    if (!value) {
      setProductPageError(true);
    } else {
      setProductPageError(false);
    }
  };
  const handleProductPageChange = useCallback((value) => {
    validateProductPage(value);
    setProductPage(value);
  }, []);
  const handleProductPageBlur = () => {
    validateProductPage(productPage);
  };
  const handleProductPageFocus = () => {
    validateProductPage(productPage);
  };
  const validateCollectionPage = (value: string) => {
    if (!value) {
      setCollectionPageError(true);
    } else {
      setCollectionPageError(false);
    }
  };
  const handleCollectionPageChange = useCallback((value) => {
    validateCollectionPage(value);
    setCollectionPage(value);
  }, []);
  const handleCollectionPageBlur = () => {
    validateCollectionPage(collectionPage);
  };
  const handleCollectionPageFocus = () => {
    validateCollectionPage(collectionPage);
  };

  const handleListCollectionsPageChange = useCallback(
    (value) => setListCollectionsPage(value),
    []
  );
  const handleBlogPageChange = useCallback((value) => setBlogPage(value), []);
  const handleArticlePageChange = useCallback(
    (value) => setArticlePage(value),
    []
  );
  const handlePageChange = useCallback((value) => setPage(value), []);
  const handleCartPageChange = useCallback((value) => setCartPage(value), []);
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const urls = [
        homePage,
        productPage,
        collectionPage,
        listCollectionsPage,
        blogPage,
        articlePage,
        page,
        cartPage,
      ].filter((n) => n);
      setLoading(true);
      const response = await run(urls, device);
      setLoading(false);
      setResults(response);
    },
    [
      articlePage,
      blogPage,
      cartPage,
      collectionPage,
      homePage,
      listCollectionsPage,
      page,
      productPage,
      device,
    ]
  );

  const handleAuditReset = () => {
    setResults(null);
  };

  useEffect(() => {
    if (homePageError || productPageError || collectionPageError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [setDisabled, homePageError, productPageError, collectionPageError]);

  if (loading) {
    return (
      <Page title="Shopify Insights">
        <Layout>
          <Layout.Section>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Spinner accessibilityLabel="Spinner" size="large" color="teal" />
            </div>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  if (!loading && results) {
    return <AuditResults results={results} onReset={handleAuditReset} />;
  }

  return (
    <Page title="Shopify Insights">
      <Layout>
        <Layout.Section>
          <Card title="Devices" sectioned>
            <DeviceSelector value={device} onChange={handleDeviceChange} />
          </Card>
          <Card title="Templates" sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <div>
                  <TextField
                    id="homePage"
                    value={homePage}
                    onChange={handleHomePageChange}
                    onBlur={handleHomePageBlur}
                    onFocus={handleHomePageFocus}
                    label="Home"
                    type="text"
                    error={homePageError}
                  />
                  {homePageError && (
                    <div
                      style={{
                        marginTop: "5px",
                      }}
                    >
                      <InlineError message="Required" fieldID="homePage" />
                    </div>
                  )}
                </div>
                <div>
                  <TextField
                    id="productPage"
                    value={productPage}
                    onChange={handleProductPageChange}
                    onBlur={handleProductPageBlur}
                    onFocus={handleProductPageFocus}
                    label="Product"
                    type="text"
                    error={productPageError}
                  />
                  {productPageError && (
                    <div
                      style={{
                        marginTop: "5px",
                      }}
                    >
                      <InlineError message="Required" fieldID="productPage" />
                    </div>
                  )}
                </div>
                <div>
                  <TextField
                    id="collectionPage"
                    value={collectionPage}
                    onChange={handleCollectionPageChange}
                    onBlur={handleCollectionPageBlur}
                    onFocus={handleCollectionPageFocus}
                    label="Collection"
                    type="text"
                    error={collectionPageError}
                  />
                  {collectionPageError && (
                    <div
                      style={{
                        marginTop: "5px",
                      }}
                    >
                      <InlineError
                        message="Required"
                        fieldID="collectionPage"
                      />
                    </div>
                  )}
                </div>

                <TextField
                  value={listCollectionsPage}
                  onChange={handleListCollectionsPageChange}
                  label="List Collections"
                  type="text"
                />
                <TextField
                  value={blogPage}
                  onChange={handleBlogPageChange}
                  label="Blog"
                  type="text"
                />
                <TextField
                  value={articlePage}
                  onChange={handleArticlePageChange}
                  label="Article"
                  type="text"
                />
                <TextField
                  value={page}
                  onChange={handlePageChange}
                  label="Page"
                  type="text"
                />
                <TextField
                  value={cartPage}
                  onChange={handleCartPageChange}
                  label="Cart"
                  type="text"
                />
                <Button disabled={disabled} submit>
                  Run Audit
                </Button>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Home;
