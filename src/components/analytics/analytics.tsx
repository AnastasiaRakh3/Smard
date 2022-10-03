import { useState } from 'react';
import { toast } from 'react-toastify';

import { getRandomInteger, adaptAnalyticsFromServer } from '../../utils';
import { AnalyticsItemType, AnalyticsItemAdaptedType } from '../../types/data';
import { analyticsDataJson } from '../../mocks/analytics';

export default function Analytics(): JSX.Element {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [data, setData] = useState<AnalyticsItemAdaptedType | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const renderMessage = (result: AnalyticsItemAdaptedType) => {
    if (result) {
      return (
        <div className="analytics__message">
          {Object.entries(result.message).map((item: string[]) => <p key={item[0]}> {item[0]}: {item[1]} </p>)}
        </div>
      );
    }
  };

  const fetchData = async () => {
    setLoading(true);

    const response = await new Promise<string>((resolve) => {
      setTimeout(() => resolve(analyticsDataJson), 1000);
    })
      .then((result) => JSON.parse(result) as AnalyticsItemType[])
      .then((result) => adaptAnalyticsFromServer(result))
      .then((result) => result[getRandomInteger(0, result.length - 1)]);

    return response;
  };

  const handleClick = async () => {
    const response = await fetchData();
    setData(response);
    setLoading(false);

    if (response.statusCode === 401) {
      setShowMessage(false);
      toast.warning('Authorization required');
      return;
    }

    setShowMessage(true);
  };

  return (
    <section className="board__analytics analytics">
      <h3 className="visually-hidden">Analytics</h3>
      <button className="analytics__btn" onClick={handleClick}>{loading ? 'Loading...' : 'Get analytics'}</button>
      {showMessage && data && renderMessage(data)}
    </section>
  );
}

