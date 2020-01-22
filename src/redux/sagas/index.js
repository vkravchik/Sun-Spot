import { all, fork } from 'redux-saga/effects';

import watchChartSaga from './chartSaga/watchChartSaga';

export default function* rootSaga() {
  yield all([
    fork(watchChartSaga)
  ])
}
