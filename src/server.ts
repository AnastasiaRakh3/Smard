import { analyticsDataJson } from './mocks/analytics';
import { portfolioDataJson } from './mocks/portfolio';
import { AnalyticsItemType, PortfolioType } from './types/data';

const analyticsDataParsed = JSON.parse(
  analyticsDataJson
) as AnalyticsItemType[];

const adaptAnalyticsFromServer = (data: AnalyticsItemType[]) => {
  const result = data.map((obj: AnalyticsItemType) => {
    const adaptedData = {
      ...obj,
      statusCode: obj['status_code'],
    };

    delete adaptedData['status_code'];
    return adaptedData;
  });

  return result;
};

const adaptedAnalyticsData = adaptAnalyticsFromServer(analyticsDataParsed);

const portfolioDataParsed = JSON.parse(
  portfolioDataJson
) as PortfolioType;

export { adaptedAnalyticsData, portfolioDataParsed };
