import { useEffect, useState } from "react";

import { portfolioDataJson } from "../mocks/portfolio";
import { PortfolioAdaptedType, PortfolioType } from "../types/data";
import { formatDataToChart } from "../utils";

export default function useChart() {
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

  return { data, loading };
}
