import React from "react";
import { Banner, Card } from "@shopify/polaris";

type Error = {
  code: number;
  message: string;
};

type Props = {
  error: Error;
};

const AuditError = ({ error }: Props) => {
  return (
    <Card sectioned>
      <Banner
        title="Error"
        action={{ content: `Code: ${error.code}` }}
        status="critical"
      >
        <p>{error.message}</p>
      </Banner>
    </Card>
  );
};

export default AuditError;
