import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import useChart from '../../hooks/useChart';
import Loading from '../loading/loading';

type TooltipProps = {
  active: boolean;
  label: string;
  payload: {
    payload: {
      dateForPopup: number;
      amount: number;
    }
  }[],
};

export default function Chart(): JSX.Element {

  const { data, loading } = useChart();

  const CustomTooltip = ({ active, payload, label }: TooltipProps): JSX.Element | null => {
    if (active && payload && payload.length) {
      return (
        <div className="chart__tooltip">
          <p>{`Date: ${payload[0].payload.dateForPopup}`}</p>
          <p>{`Amount: ${payload[0].payload.amount}$`}</p>
        </div>
      );
    };
    return null;
  }

  class ChartCanvas extends PureComponent {
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: "#82ca9d" }} />
            <YAxis dataKey="amount" unit="$" tick={{ fill: "#82ca9d" }} />
            <Tooltip wrapperStyle={{ outline: "none" }} content={< CustomTooltip active={false} payload={[]} label="" />} />
            <Area type="monotone" dataKey="amount" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      );
    }
  }

  return (
    <section className="board__chart chart">
      <h3 className="visually-hidden">Chart</h3>
      {loading ? <Loading /> : <ChartCanvas />}
    </section>
  );
}
