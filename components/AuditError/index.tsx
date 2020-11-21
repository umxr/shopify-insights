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
      <Banner title="Error" status="critical">
        <p>{`Code: ${error.code}`}</p>
        <p>{error.message}</p>
      </Banner>
    </Card>
  );
};

export default AuditError;
