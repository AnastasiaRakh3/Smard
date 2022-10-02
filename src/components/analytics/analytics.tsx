import { getRandomInteger } from '../../utils';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { adaptedAnalyticsData } from '../../server';
import { AnalyticsItemType } from '../../types/data';

export default function Analytics(): JSX.Element {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<null | AnalyticsItemType>(null);

  const renderMessage = (response: AnalyticsItemType | null) => {
    if (response) {
      return (
        <div className="analytics__message">
          {Object.entries(response.message).map((item) => <p key={item[0]}> {item[0]}: {item[1]} </p>)}
        </div>
      );
    }
  };

  const handleClick = () => {
    const response = adaptedAnalyticsData[getRandomInteger(0, adaptedAnalyticsData.length - 1)];
    if (response.statusCode === 401) {
      toast.warning('Authorization required');
      setShowMessage(false);
    } else {
      setMessage(response);
      setShowMessage(true);
    }
  };

  return (
    <section className="board__analytics analytics">
      <h3 className="visually-hidden">Analytics</h3>
      <button className="analytics__btn" onClick={handleClick}>Get analytics</button>
      {showMessage && renderMessage(message)}
    </section>
  );
}

