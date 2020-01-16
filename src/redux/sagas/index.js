import { all, fork } from "redux-saga/effects";

import watchDemoSaga from './watchDemoSaga'
import watchChartSaga from "./chartSaga/watchChartSaga";

export default function* rootSaga() {
  yield all([
    fork(watchDemoSaga),
    fork(watchChartSaga)
  ])
}
