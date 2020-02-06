import { createAction } from 'redux-actions';

import {
  MATCHES_DATA_FETCH,
  MATCHES_DATA_FETCH_SUCCESS,
  MATCHES_EXPANDED_DATA_FETCH,
  MATCHES_EXPANDED_DATA_FETCH_SUCCESS,
  MATCHES_FB_TO_TIME_FETCH,
  MATCHES_FB_TO_TIME_FETCH_SUCCESS
} from '../../common/constants/matchesConstants';

export const getFbToTime = createAction(MATCHES_FB_TO_TIME_FETCH);
export const getFbToTimeSuccess = createAction(MATCHES_FB_TO_TIME_FETCH_SUCCESS);

export const getMatchesList = createAction(MATCHES_DATA_FETCH);
export const getMatchesListSuccess = createAction(MATCHES_DATA_FETCH_SUCCESS);

export const getExpandedMatchesList = createAction(MATCHES_EXPANDED_DATA_FETCH);
export const getExpandedMatchesListSuccess = createAction(MATCHES_EXPANDED_DATA_FETCH_SUCCESS);
