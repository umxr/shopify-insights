import { Select } from "@shopify/polaris";
import { DEVICES } from "./constants";
import React from "react";

type Props = {
  value: string;
  onChange: (selected: string, id: string) => void;
};

const DeviceSelector = ({ value, onChange }: Props) => {
  return (
    <Select
      label="Audit Device"
      options={DEVICES}
      onChange={onChange}
      value={value}
    />
  );
};

export default DeviceSelector;
