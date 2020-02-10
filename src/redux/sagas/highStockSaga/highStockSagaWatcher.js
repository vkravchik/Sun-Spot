import { takeLatest } from 'redux-saga/effects';

import { highStockWorker } from './highStockSagaWorker';

import { HIGH_STOCK_DATA_FETCH } from '../../../common/constants/highStockConstants';

export default function* highStockSagaWatcher() {
  yield takeLatest(HIGH_STOCK_DATA_FETCH, highStockWorker);
}
