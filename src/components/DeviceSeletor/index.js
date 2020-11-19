import { Select } from "@shopify/polaris";
import { DEVICES } from "./constants";

const DeviceSelector = ({ value, onChange }) => {
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
