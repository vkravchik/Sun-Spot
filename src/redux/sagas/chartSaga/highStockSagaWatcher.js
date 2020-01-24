import { takeLatest } from 'redux-saga/effects';

import { highStockConfigWorker, highStockWorker, toggleChartTypeWorker } from './highStockSagaWorker';

import { GET_HIGH_STOCK_CONFIG_REQUEST, GET_HIGH_STOCK_REQUEST } from '../../../common/constants/highStockConstants';
import { TOGGLE_CHART_TYPE } from "../../../common/constants/switchTypeConstants";

export default function* highStockSagaWatcher() {
  yield takeLatest(GET_HIGH_STOCK_REQUEST, highStockWorker);
  yield takeLatest(GET_HIGH_STOCK_CONFIG_REQUEST, highStockConfigWorker);
  yield takeLatest(TOGGLE_CHART_TYPE, toggleChartTypeWorker)
}
