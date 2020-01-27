import { call, put } from 'redux-saga/effects';

import { getHighStockData } from '../../services/highStockService';

import {
  GET_HIGH_STOCK_REQUEST_ERROR,
  GET_HIGH_STOCK_REQUEST_SUCCESS
} from '../../../common/constants/highStockConstants';

export function* highStockWorker(payload) {
  try {
    const data = yield call(getHighStockData, payload.payload);

    yield put({type: GET_HIGH_STOCK_REQUEST_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: GET_HIGH_STOCK_REQUEST_ERROR, payload: e})
  }
}
