import { GET_HIGH_STOCK_REQUEST } from "../../constants/chartConstants";

export const getHighStockAction = (payload) => ({
  type: GET_HIGH_STOCK_REQUEST,
  payload
});
