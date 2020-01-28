import { call, put } from 'redux-saga/effects';

import { getHighStockData } from '../../services/highStockService';

import {
  HIGH_STOCK_DATA_FETCH_ERROR,
  HIGH_STOCK_DATA_FETCH_SUCCESS
} from '../../../common/constants/highStockConstants';

export function* highStockWorker(payload) {
  try {
    const data = yield call(getHighStockData, payload.payload);

    yield put({type: HIGH_STOCK_DATA_FETCH_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: HIGH_STOCK_DATA_FETCH_ERROR, payload: e})
  }
}
