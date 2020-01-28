import { createAction } from 'redux-actions';

import { TOGGLE_CHART_TYPE } from '../../common/constants/switchTypeConstants';

export const toggleChartTypeAction = createAction(TOGGLE_CHART_TYPE);
