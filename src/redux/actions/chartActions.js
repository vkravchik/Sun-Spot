import { GET_HIGH_STOCK_REQUEST, TOGGLE_CHART_TYPE } from '../../constants/chartConstants';

export const getHighStockAction = (payload) => ({
  type: GET_HIGH_STOCK_REQUEST,
  payload
});

export const toggleChartTypeAction = (payload) => ({
  type: TOGGLE_CHART_TYPE,
  payload
});
