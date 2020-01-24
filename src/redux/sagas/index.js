import { all, fork } from 'redux-saga/effects';

import highStockSagaWatcher from './chartSaga/highStockSagaWatcher';

export default function* rootSaga() {
  yield all([
    fork(highStockSagaWatcher)
  ])
}
