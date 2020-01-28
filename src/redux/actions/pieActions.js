import { createAction } from 'redux-actions';

import {
  GET_PIE_DATA_FETCH,
  GET_PIE_DATA_FETCH_ERROR,
  GET_PIE_DATA_FETCH_SUCCESS
} from '../../common/constants/pieConstants';

export const getPieData = createAction(GET_PIE_DATA_FETCH);
export const getPieDataSuccess = createAction(GET_PIE_DATA_FETCH_SUCCESS);
export const getPieDataError = createAction(GET_PIE_DATA_FETCH_ERROR);
