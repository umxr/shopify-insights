import { useCallback, useEffect, useState } from "react";
import {
  Page,
  Layout,
  Form,
  FormLayout,
  TextField,
  Card,
  Button,
  InlineError,
  Spinner,
  Heading,
  List,
  Banner,
} from "@shopify/polaris";
import run from "./api/run";
import getCruxMetrics from "./api/getCruxMetrics";
import getLighthouseMetrics from "./api/getLighthouseMetrics";
import DeviceSelector from "./components/DeviceSeletor";

const App = () => {
  // Device State
  const [device, setDevice] = useState("DESKTOP");

  // Audit Loading State
  const [loading, setLoading] = useState(false);

  // Results Show State
  const [results, setResults] = useState(null);

  // Home Page State
  const [homePage, setHomepage] = useState("");
  const [homePageError, setHomePageError] = useState(false);

  // Product Page State
  const [productPage, setProductPage] = useState("");
  const [productPageError, setProductPageError] = useState(false);

  // Collection Page State
  const [collectionPage, setCollectionPage] = useState("");
  const [collectionPageError, setCollectionPageError] = useState(false);

  // List Collections Page State
  const [listCollectionsPage, setListCollectionsPage] = useState("");

  // Blog Page State
  const [blogPage, setBlogPage] = useState("");

  // Article Page State
  const [articlePage, setArticlePage] = useState("");

  // Page State
  const [page, setPage] = useState("");

  // Cart Page Start
  const [cartPage, setCartPage] = useState("");

  // Form Valid State
  const [disabled, setDisabled] = useState(false);

  // Device Handlers
  const handleDeviceChange = useCallback((value) => setDevice(value), []);

  // Home Page Handlers
  const validateHomePage = (value) => {
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

  // Product Page Handlers
  const validateProductPage = (value) => {
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

  // Collection Page Handlers
  const validateCollectionPage = (value) => {
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
            <Card title="Templates" sectioned>
              <Spinner accessibilityLabel="Spinner" size="large" color="teal" />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  if (!loading && results) {
    return (
      <Page title="Shopify Insights">
        <Layout>
          <Layout.Section>
            {results.map((result) => {
              if (result.error) {
                return (
                  <Card sectioned>
                    <Banner
                      title="Error"
                      action={{ content: `Code: ${result.error.code}` }}
                      status="critical"
                    >
                      <p>{result.error.message}</p>
                    </Banner>
                  </Card>
                );
              }
              const cruxMetrics = getCruxMetrics(result);
              const lighthouseMetrics = getLighthouseMetrics(result);
              return (
                <Card
                  key={result.id}
                  title={`Page Tested: ${result.id}`}
                  sectioned
                >
                  <div
                    style={{
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "5px",
                      }}
                    >
                      <Heading>Chrome User Experience Report Results</Heading>
                    </div>
                    <List type="bullet">
                      {Object.keys(lighthouseMetrics).map((metric, index) => {
                        return (
                          <List.Item key={index}>
                            {metric} - {lighthouseMetrics[metric]}
                          </List.Item>
                        );
                      })}
                    </List>
                  </div>

                  <div
                    style={{
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        marginBottom: "5px",
                      }}
                    >
                      <Heading>Lighthouse Results</Heading>
                    </div>
                    <List type="bullet">
                      {Object.keys(cruxMetrics).map((metric, index) => {
                        return (
                          <List.Item key={index}>
                            {metric} - {cruxMetrics[metric]}
                          </List.Item>
                        );
                      })}
                    </List>
                  </div>
                </Card>
              );
            })}
          </Layout.Section>
        </Layout>
      </Page>
    );
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

export default App;
