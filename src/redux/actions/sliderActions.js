import { createAction } from 'redux-actions';

import {
  HIGH_STOCK_CONFIG_FETCH, HIGH_STOCK_CONFIG_FETCH_ERROR, HIGH_STOCK_CONFIG_FETCH_SUCCESS,
  HIGH_STOCK_CONFIG_SET
} from '../../common/constants/highStockConstants';

export const getSliderConfigData = createAction(HIGH_STOCK_CONFIG_FETCH);
export const getSliderConfigDataSuccess = createAction(HIGH_STOCK_CONFIG_FETCH_SUCCESS);

export const setSliderConfigData = createAction(HIGH_STOCK_CONFIG_SET);
