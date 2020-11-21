export type PagespeedApiResponse = {
  kind: string;
  captchaResult: string;
  id: string;
  loadingExperience: PagespeedApiLoadingExperienceV5;
  originLoadingExperience: PagespeedApiLoadingExperienceV5;
  analysisUTCTimestamp: string;
  lighthouseResult: LighthouseResultV5;
  version: PagespeedVersion;
  error: PagespeedApiResponseError;
};

export type Error = {
  message: string;
  domain: string;
  reason: string;
};

export type PagespeedApiResponseError = {
  code: number;
  message: string;
  errors: Error[];
  status: string;
};

export type LighthouseResultV5 = {
  fetchTime: string;
  requestedUrl: string;
  finalUrl: string;
  lighthouseVersion: string;
  i18n: I18n;
  userAgent: string;
  audits: LighthouseAuditResultV5;
  categoryGroups: CategoryGroupV5;
  stackPacks: StackPack[];
  environment: Environment;
  runWarnings: ListValue[];
  runtimeError: RuntimeError;
  categories: Categories;
  timing: Timing;
  configSettings: ConfigSettings;
};

export type ListValue = Value[];

export type Value = string | boolean | null | number | ListValue;

export type ConfigSettings = {
  onlyCategories: Value;
  emulatedFormFactor: string;
  locale: string;
  channel: string;
};

export type Timing = {
  total: number;
};

export type Categories = {
  accessibility: LighthouseCategoryV5;
  "best-practices": LighthouseCategoryV5;
  seo: LighthouseCategoryV5;
  pwa: LighthouseCategoryV5;
  performance: LighthouseCategoryV5;
};

export type LighthouseCategoryV5 = {
  id: string;
  title: string;
  description: string;
  manualDescription: string;
  auditRefs: AuditRefs[];
  score: Value;
};

export type AuditRefs = {
  id: string;
  weight: number;
  group: string;
};

export type RuntimeError = {
  code: string;
  message: string;
};

export type Environment = {
  networkUserAgent: string;
  hostUserAgent: string;
  benchmarkIndex: number;
};

export type StackPack = {
  id: string;
  title: string;
  iconDataURL: string;
  descriptions: {
    [key: string]: string;
  };
};

export type CategoryGroupV5 = {
  [key: string]: {
    [key: string]: string;
  };
};

export type LighthouseAuditResultV5 = {
  [key: string]: {
    [key: string]: string;
  };
};

export type I18n = {
  rendererFormattedStrings: RendererFormattedStrings;
};

export type RendererFormattedStrings = {
  varianceDisclaimer: string;
  opportunityResourceColumnLabel: string;
  opportunitySavingsColumnLabel: string;
  errorMissingAuditInfo: string;
  errorLabel: string;
  warningHeader: string;
  auditGroupExpandTooltip: string;
  passedAuditsGroupTitle: string;
  notApplicableAuditsGroupTitle: string;
  manualAuditsGroupTitle: string;
  toplevelWarningsMessage: string;
  scorescaleLabel: string;
  crcLongestDurationLabel: string;
  crcInitialNavigation: string;
  lsPerformanceCategoryDescription: string;
  labDataTitle: string;
};

export type PagespeedVersion = {
  major: string;
  minor: string;
};

export type PagespeedApiLoadingExperienceV5 = {
  id: string;
  metrics: {
    [key: string]: {
      [key: string]: string;
    };
  };
  overall_category: string;
  initial_url: string;
  origin_fallback: boolean;
};

export enum Devices {
  "Desktop" = "DESKTOP",
  "Mobile" = "MOBILE",
}
