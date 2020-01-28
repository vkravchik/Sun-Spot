import { createAction } from 'redux-actions';

import {
  GET_HIGH_STOCK_CONFIG_REQUEST,
  SET_HIGH_STOCK_CONFIG_REQUEST
} from '../../common/constants/highStockConstants';

export const getSliderConfigAction = createAction(GET_HIGH_STOCK_CONFIG_REQUEST);

export const setSliderConfigAction = createAction(SET_HIGH_STOCK_CONFIG_REQUEST);
