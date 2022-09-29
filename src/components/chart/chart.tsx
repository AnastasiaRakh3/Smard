import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

import { formatDataToChart } from '../../utils';
import { portfolioData } from '../../mocks/portfolio';

const data = formatDataToChart(portfolioData);
const cardinal = curveCardinal.tension(0.2);

class ChartCanvas extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="amount" unit="$" />
          <Tooltip />
          <Area type={cardinal} dataKey="amount" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}


export default function Chart(): JSX.Element {
  return (
    <section className="board__chart chart">
      <h3 className="visually-hidden">Chart</h3>
      <ChartCanvas />
    </section>
  );
}
