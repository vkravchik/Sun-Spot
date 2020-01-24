import { call, put } from 'redux-saga/effects';

import { getHighStockConfig, getHighStockData } from '../../services/chartService';

import {
  GET_HIGH_STOCK_CONFIG_REQUEST_ERROR, GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS,
  GET_HIGH_STOCK_REQUEST_ERROR,
  GET_HIGH_STOCK_REQUEST_SUCCESS
} from '../../../common/constants/highStockConstants';
import { TOGGLE_CHART } from "../../../common/constants/switchTypeConstants";

export function* highStockWorker(payload) {
  try {
    const data = yield call(getHighStockData, payload.payload);

    yield put({type: GET_HIGH_STOCK_REQUEST_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: GET_HIGH_STOCK_REQUEST_ERROR, payload: e})
  }
}

export function* highStockConfigWorker({payload}) {
  try {
    const data = yield call(getHighStockConfig, payload);

    yield put({type: GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: GET_HIGH_STOCK_CONFIG_REQUEST_ERROR, payload: e})
  }
}

export function* toggleChartTypeWorker({payload}) {
  yield put({type: TOGGLE_CHART, payload})
}
