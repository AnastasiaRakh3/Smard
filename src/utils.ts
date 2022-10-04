import dayjs from "dayjs";
import { AnalyticsItemType, PortfolioType } from "./types/data";

const formatDateToChart = (date: string) => dayjs(date).format("DD.MM");
const formatDateToPopup = (date: string) => dayjs(date).format("DD.MM.YYYY");

const formatDataToChart = (data: PortfolioType) => {
  const formatedData = [];

  for (const [key, value] of Object.entries(data)) {
    const obj = {
      date: formatDateToChart(key),
      amount: value,
      dateForPopup: formatDateToPopup(key),
    };

    formatedData.push(obj);
  }

  return formatedData;
};

const formatName = (name: string) => {
  if (name.includes("-")) {
    return name
      .split("-")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join("/");
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const adaptAnalyticsFromServer = (data: AnalyticsItemType[]) =>
  /*eslint-disable */
  data.map(({ status_code, ...item }) => ({
    ...item,
    statusCode: status_code,
  }));
/*eslint-disable */

export {
  formatDataToChart,
  formatName,
  getRandomInteger,
  adaptAnalyticsFromServer,
};
