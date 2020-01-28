import { createAction } from 'redux-actions';

import { HIGH_STOCK_DATA_FETCH } from '../../common/constants/highStockConstants';

export const getHighStockAction = createAction(HIGH_STOCK_DATA_FETCH);
