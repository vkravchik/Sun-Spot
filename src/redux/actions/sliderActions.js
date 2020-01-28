import { createAction } from 'redux-actions';

import {
  HIGH_STOCK_CONFIG_FETCH,
  HIGH_STOCK_CONFIG_SET
} from '../../common/constants/highStockConstants';

export const getSliderConfigAction = createAction(HIGH_STOCK_CONFIG_FETCH);

export const setSliderConfigAction = createAction(HIGH_STOCK_CONFIG_SET);
