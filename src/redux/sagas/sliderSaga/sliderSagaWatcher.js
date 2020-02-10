import { takeLatest } from 'redux-saga/effects';

import { sliderWorker } from './sliderSagaWorker';

import { HIGH_STOCK_CONFIG_FETCH } from '../../../common/constants/highStockConstants';

export default function* sliderSagaWatcher() {
  yield takeLatest(HIGH_STOCK_CONFIG_FETCH, sliderWorker);
}
