import dayjs from 'dayjs';
import { PortfolioType } from './types/data';

const formatDateToChart = (date: string) => dayjs(date).format('DD-MM');

const formatDataToChart = (data: PortfolioType) => {
  const formatedData = [];

  for (const [key, value] of Object.entries(data)) {
    const obj = {
      date: formatDateToChart(key),
      amount: value,
    };

    formatedData.push(obj);
  }

  return formatedData;
};

export { formatDataToChart };
