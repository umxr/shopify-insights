import React from "react";
import { Button, Card, Heading, Layout, List, Page } from "@shopify/polaris";
import getCruxMetrics from "../../utils/getCruxMetrics";
import getLighthouseMetrics from "../../utils/getLighthouseMetrics";
import AuditError from "../AuditError";
import { PagespeedApiResponse } from "../../config/types";

type Props = {
  results: PagespeedApiResponse[];
  onReset: () => void;
};

const AuditResults = ({ results, onReset }: Props) => {
  return (
    <Page title="Shopify Insights - Results">
      <Layout>
        <Layout.Section>
          {results.map((result: PagespeedApiResponse) => {
            if (result.error) {
              return <AuditError error={result.error} />;
            }
            const cruxMetrics: {
              [key: string]: string;
            } = getCruxMetrics(result);
            const lighthouseMetrics: {
              [key: string]: string;
            } = getLighthouseMetrics(result);
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
          <Card title="Actions" sectioned>
            <Button onClick={onReset}>Reset Audit</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default AuditResults;
