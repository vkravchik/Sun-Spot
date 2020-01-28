import { createAction } from 'redux-actions';

import {
  HIGH_STOCK_DATA_FETCH,
  HIGH_STOCK_DATA_FETCH_ERROR,
  HIGH_STOCK_DATA_FETCH_SUCCESS
} from '../../common/constants/highStockConstants';

export const getHighStockData = createAction(HIGH_STOCK_DATA_FETCH);
export const getHighStockSuccess = createAction(HIGH_STOCK_DATA_FETCH_SUCCESS);
export const getHighStockError = createAction(HIGH_STOCK_DATA_FETCH_ERROR);
