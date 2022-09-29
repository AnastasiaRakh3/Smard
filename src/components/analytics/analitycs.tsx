import { getRandomInteger } from '../../utils';
import { AnalyticsType } from '../../types/data';
import { toast } from 'react-toastify';
import { analytics } from '../../mocks/analytics';
import { useState } from 'react';

export default function Analytics(): JSX.Element {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<null | AnalyticsType>(null);

  const renderMessage = (response: AnalyticsType | null) => {
    if (response) {
      return (
        <div className="analytics__message">
          {Object.entries(response.message).map((item) => <p key={item[0]}> {item[0]}: {item[1]} </p>)}
        </div>
      );
    }
  };

  const handleClick = () => {
    const response = analytics[getRandomInteger(0, analytics.length - 1)];
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
      {showMessage ? renderMessage(message) : null}
    </section>
  );
}

