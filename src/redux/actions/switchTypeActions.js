import { createAction } from 'redux-actions';

import { TOGGLE_CHART_TYPE_START, TOGGLE_CHART_TYPE_FINISH } from '../../common/constants/switchTypeConstants';

export const toggleChartTypeStart = createAction(TOGGLE_CHART_TYPE_START);
export const toggleChartTypeFinish = createAction(TOGGLE_CHART_TYPE_FINISH);
