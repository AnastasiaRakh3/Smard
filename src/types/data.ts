export type PortfolioType = {
  [key: string]: number;
};

type AnalyticsMessageType = {
  [key: string]: string;
}

export type AnalyticsItemType = {
  message: AnalyticsMessageType | string;
  status_code?: number;
}
