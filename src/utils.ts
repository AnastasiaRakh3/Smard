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

const formatName = (name: string) => {
  if (name.includes('-')) {
    return name
      .split('-')
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join('/');
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export { formatDataToChart, formatName };
