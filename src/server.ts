import analyticsData from './mocks/analytics.json';

type AnalyticsItem = {
  message: AnalyticsMessage | string;
  status_code?: number;
}

type AnalyticsMessage = {
  [key: string]: string;
}

const adaptFromServer = (data: AnalyticsItem[]) => {

  const result = data.map((obj: AnalyticsItem) => {

    const adaptedData = {
      ...obj,
      statusCode: obj['status_code'],
    };

    delete adaptedData['status_code'];
    return adaptedData;
  });

  return result;
};

const adaptedData = adaptFromServer(analyticsData);

export { adaptedData };
