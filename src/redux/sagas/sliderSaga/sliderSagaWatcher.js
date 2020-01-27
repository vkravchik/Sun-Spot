import { takeLatest } from 'redux-saga/effects';

import { sliderWorker } from './sliderSagaWorker';

import { GET_HIGH_STOCK_CONFIG_REQUEST } from '../../../common/constants/highStockConstants';

export default function* sliderSagaWatcher() {
  yield takeLatest(GET_HIGH_STOCK_CONFIG_REQUEST, sliderWorker);
}
