import { takeLatest } from 'redux-saga/effects';

import { myChartWorker } from './customSagaWorker';

import { START_CHART_CREATE } from '../../../common/constants/customChart';

export default function* customChartWatcher() {
  yield takeLatest(START_CHART_CREATE, myChartWorker);
}
