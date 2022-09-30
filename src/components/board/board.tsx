import Stats from '../stats/stats';
import Analytics from '../analytics/analytics';
import Chart from '../chart/chart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Board(): JSX.Element {
  return (
    <div className="main__board board">
      <h2 className="board__heading">Dashboard Analytics</h2>
      <Stats/>
      <Analytics/>
      <Chart/>
      <ToastContainer />
    </div>
  );
}
