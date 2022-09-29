export type PortfolioType = {
  [key: string]: number;
};

export type FormattedPortfolioType = {
  date: string;
  amount: number;
};

export type MessageType = {
  [key: string]: string;
};

export type AnalyticsType = {
  message: string | MessageType;
  statusCode: number;
};
