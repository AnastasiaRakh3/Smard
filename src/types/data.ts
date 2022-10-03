export type PortfolioType = {
  [key: string]: number;
};

export type PortfolioAdaptedType = {
  date: string;
  amount: number;
};

type AnalyticsMessageType = {
  [key: string]: string;
};

export type AnalyticsItemType = {
  message: AnalyticsMessageType | string;
  status_code?: number;
};
