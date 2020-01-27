import { takeLatest } from 'redux-saga/effects';

import { toggleChartTypeWorker } from './switchTypeSagaWorker';

import { TOGGLE_CHART_TYPE } from '../../../common/constants/switchTypeConstants';

export default function* switchTypeSagaWatcher() {
  yield takeLatest(TOGGLE_CHART_TYPE, toggleChartTypeWorker)
}
