import { createAction } from 'redux-actions';

import { ADD_ERROR, DISPATCH_ERROR, REMOVE_ERROR } from '../../common/constants/dataConstants';

export const dispatchError = createAction(DISPATCH_ERROR);
export const setError = createAction(ADD_ERROR);
export const removeError = createAction(REMOVE_ERROR);
