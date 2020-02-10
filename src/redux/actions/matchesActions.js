import { createAction } from 'redux-actions';

import {
  START_SET_NESTED_OBJECT,
  FINISH_SET_NESTED_OBJECT,
  MATCHES_DATA_FETCH,
  MATCHES_DATA_FETCH_SUCCESS,
  MATCHES_EXPANDED_DATA_FETCH,
  MATCHES_EXPANDED_DATA_FETCH_SUCCESS,
  MATCHES_FB_TO_TIME_FETCH,
  MATCHES_FB_TO_TIME_FETCH_SUCCESS
  // START_REMOVE_NESTED_OBJECT,
  // FINISH_REMOVE_NESTED_OBJECT,
} from '../../common/constants/matchesConstants';

export const getFbToTime = createAction(MATCHES_FB_TO_TIME_FETCH);
export const getFbToTimeSuccess = createAction(MATCHES_FB_TO_TIME_FETCH_SUCCESS);

export const getMatchesList = createAction(MATCHES_DATA_FETCH);
export const getMatchesListSuccess = createAction(MATCHES_DATA_FETCH_SUCCESS);

export const getExpandedMatchesList = createAction(MATCHES_EXPANDED_DATA_FETCH);
export const getExpandedMatchesListSuccess = createAction(MATCHES_EXPANDED_DATA_FETCH_SUCCESS);


export const startShowExpandedRow = createAction(START_SET_NESTED_OBJECT);
export const stopShowExpandedRow = createAction(FINISH_SET_NESTED_OBJECT);

// export const expandRowFalseStart = createAction(START_REMOVE_NESTED_OBJECT);
// export const expandRowFalseFinish = createAction(FINISH_REMOVE_NESTED_OBJECT);
