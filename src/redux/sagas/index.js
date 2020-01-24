import { all, fork } from 'redux-saga/effects';

import pieSagaWatcher from "./pieSaga/pieSagaWatcher";
import highStockSagaWatcher from './highStockSaga/highStockSagaWatcher';
import switchTypeSagaWatcher from './switchTypeSaga/switchTypeSagaWatcher';

export default function* rootSaga() {
  yield all([
    fork(highStockSagaWatcher),
    fork(pieSagaWatcher),
    fork(switchTypeSagaWatcher)
  ])
}
