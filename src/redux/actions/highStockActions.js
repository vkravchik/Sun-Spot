import { createAction } from 'redux-actions';

import { GET_HIGH_STOCK_REQUEST } from '../../common/constants/highStockConstants';

export const getHighStockAction = createAction(GET_HIGH_STOCK_REQUEST);
