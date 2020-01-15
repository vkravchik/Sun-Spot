import { all, fork } from "redux-saga/effects";

import watchDemoSaga from './watchDemoSaga'

export default function* rootSaga() {
  yield all([
    fork(watchDemoSaga)
  ])
}
