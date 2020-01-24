import { all, fork } from 'redux-saga/effects';

import highStockSagaWatcher from './highStockSaga/highStockSagaWatcher';
import switchTypeSagaWatcher from './switchTypeSaga/switchTypeSagaWatcher';

export default function* rootSaga() {
  yield all([
    fork(highStockSagaWatcher),
    fork(switchTypeSagaWatcher)
  ])
}
