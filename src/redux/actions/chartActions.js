import { GET_HIGH_STOCK_CONFIG_REQUEST, GET_HIGH_STOCK_REQUEST } from '../../common/constants/highStockConstants';
import { TOGGLE_CHART_TYPE } from "../../common/constants/switchTypeConstants";

export const getHighStockAction = (payload) => ({
  type: GET_HIGH_STOCK_REQUEST,
  payload
});

export const getHighStockConfigAction = (payload) => ({
  type: GET_HIGH_STOCK_CONFIG_REQUEST,
  payload
});

export const toggleChartTypeAction = (payload) => ({
  type: TOGGLE_CHART_TYPE,
  payload
});
