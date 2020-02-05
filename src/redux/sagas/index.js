import { all, fork } from 'redux-saga/effects';

import pieSagaWatcher from './pieSaga/pieSagaWatcher';
import highStockSagaWatcher from './highStockSaga/highStockSagaWatcher';
import switchTypeSagaWatcher from './switchTypeSaga/switchTypeSagaWatcher';
import sliderSagaWatcher from './sliderSaga/sliderSagaWatcher';
import errorHandlerWatcher from './errorHandlerSaga/errorHandlerWatcher';
import heroesSagaWatcher from './heroesSaga/heroesSagaWatcher';

export default function* rootSaga() {
  yield all([
    fork(highStockSagaWatcher),
    fork(pieSagaWatcher),
    fork(switchTypeSagaWatcher),
    fork(sliderSagaWatcher),
    fork(errorHandlerWatcher),
    fork(heroesSagaWatcher)
  ]);
}
