// TODO: Type Data

const getLighthouseMetrics = (data: any) => {
  const lighthouseMetrics = {
    "First Contentful Paint":
      data.lighthouseResult.audits["first-contentful-paint"].displayValue,
    "Speed Index": data.lighthouseResult.audits["speed-index"].displayValue,
    "Time To Interactive":
      data.lighthouseResult.audits["interactive"].displayValue,
    "First Meaningful Paint":
      data.lighthouseResult.audits["first-meaningful-paint"].displayValue,
    "First CPU Idle":
      data.lighthouseResult.audits["first-cpu-idle"].displayValue,
    "Estimated Input Latency":
      data.lighthouseResult.audits["estimated-input-latency"].displayValue,
  };

  return lighthouseMetrics;
};

export default getLighthouseMetrics;
