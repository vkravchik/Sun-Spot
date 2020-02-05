import { createAction } from 'redux-actions';

import { MATCHES_FB_TO_TIME_FETCH, MATCHES_FB_TO_TIME_FETCH_SUCCESS } from '../../common/constants/matchesConstants';

export const getFbToTime = createAction(MATCHES_FB_TO_TIME_FETCH);
export const getFbToTimeSuccess = createAction(MATCHES_FB_TO_TIME_FETCH_SUCCESS);
