import useAnalytics from "../../hooks/useAnalytics";

export default function Analytics(): JSX.Element {

  const { showMessage, data, loading, renderMessage, handleClick } = useAnalytics();

  return (
    <section className="board__analytics analytics">
      <h3 className="visually-hidden">Analytics</h3>
      <button className="analytics__btn" onClick={handleClick}>{loading ? 'Loading...' : 'Get analytics'}</button>
      {showMessage && data && renderMessage(data)}
    </section>
  );
}

