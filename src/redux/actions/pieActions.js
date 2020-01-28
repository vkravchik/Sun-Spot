import { createAction } from 'redux-actions';

import { GET_PIE_REQUEST } from '../../common/constants/pieConstants';

export const getPieAction = createAction(GET_PIE_REQUEST);
