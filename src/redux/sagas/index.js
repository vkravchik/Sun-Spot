import { all, fork } from 'redux-saga/effects';

import pieSagaWatcher from './pieSaga/pieSagaWatcher';
import highStockSagaWatcher from './highStockSaga/highStockSagaWatcher';
import switchTypeSagaWatcher from './switchTypeSaga/switchTypeSagaWatcher';
import sliderSagaWatcher from './sliderSaga/sliderSagaWatcher';
import errorHandlerWatcher from './errorHandlerSaga/errorHandlerWatcher';
import heroesSagaWatcher from './heroesSaga/heroesSagaWatcher';
import matchesSagaWatcher from './matchesSaga/matchesSagaWatcher';
import customChartWatcher from './customChartSaga/customSagaWatcher';

export default function* rootSaga() {
  yield all([
    fork(highStockSagaWatcher),
    fork(pieSagaWatcher),
    fork(switchTypeSagaWatcher),
    fork(sliderSagaWatcher),
    fork(errorHandlerWatcher),
    fork(heroesSagaWatcher),
    fork(matchesSagaWatcher),
    fork(customChartWatcher)
  ]);
}
