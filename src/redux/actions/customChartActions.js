import { createAction } from 'redux-actions';

import { FINISH_CHART_CREATE, START_CHART_CREATE } from '../../common/constants/customChart';

export const startCreateCustomChart = createAction(START_CHART_CREATE);
export const finishCreateCustomChart = createAction(FINISH_CHART_CREATE);
