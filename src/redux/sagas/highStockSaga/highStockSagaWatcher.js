import { takeLatest } from 'redux-saga/effects';

import { highStockWorker } from './highStockSagaWorker';

import { GET_HIGH_STOCK_REQUEST } from '../../../common/constants/highStockConstants';

export default function* highStockSagaWatcher() {
  yield takeLatest(GET_HIGH_STOCK_REQUEST, highStockWorker);
}
