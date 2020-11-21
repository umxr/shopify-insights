import { PagespeedApiResponse } from "../config/types";

const getCruxMetrics = (data: PagespeedApiResponse) => {
  const cruxMetrics = {
    "First Contentful Paint":
      data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
    "First Input Delay":
      data.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
  };

  return cruxMetrics;
};

export default getCruxMetrics;
