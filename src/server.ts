import analyticsData from './mocks/analytics.json';

import { AnalyticsItemType } from './types/data';

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

const adaptedData = adaptAnalyticsFromServer(analyticsData);

export { adaptedData };
