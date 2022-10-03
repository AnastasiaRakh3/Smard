import { PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Loading from '../loading/loading';
import { portfolioDataJson } from '../../mocks/portfolio';
import { PortfolioAdaptedType, PortfolioType } from '../../types/data';
import { formatDataToChart } from '../../utils';

export default function Chart(): JSX.Element {

  const [data, setData] = useState<PortfolioAdaptedType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const response = await new Promise<string>((resolve) => {
      setTimeout(() => resolve(portfolioDataJson), 1000);
    })
      .then((result) => JSON.parse(result) as PortfolioType)
      .then((result) => formatDataToChart(result));

    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
