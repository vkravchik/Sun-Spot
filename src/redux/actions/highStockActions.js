import { GET_HIGH_STOCK_REQUEST } from '../../common/constants/highStockConstants';

export const getHighStockAction = (payload) => ({
  type: GET_HIGH_STOCK_REQUEST,
  payload
});
