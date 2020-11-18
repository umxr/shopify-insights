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
} from "@shopify/polaris";

const App = () => {
  // Home Page State
  const [homePage, setHomepage] = useState("");
  const [homePageError, setHomePageError] = useState(false);

  // Product Page State
  const [productPage, setProductPage] = useState("");
  const [productPageError, setProductPageError] = useState(false);

  // Collection Page State
  const [collectionPage, setCollectionPage] = useState("");
  const [collectionPageError, setCollectionPageError] = useState(false);

  const [listCollectionsPage, setListCollectionsPage] = useState("");
  const [blogPage, setBlogPage] = useState("");
  const [articlePage, setArticlePage] = useState("");
  const [page, setPage] = useState("");
  const [cartPage, setCartPage] = useState("");

  // Form Valid State
  const [disabled, setDisabled] = useState(false);

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
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (homePageError || productPageError || collectionPageError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [setDisabled, homePageError, productPageError, collectionPageError]);

  return (
    <Page title="Shopify Insights">
      <Layout>
        <Layout.Section>
          <Card title="Shopify Templates" sectioned>
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
