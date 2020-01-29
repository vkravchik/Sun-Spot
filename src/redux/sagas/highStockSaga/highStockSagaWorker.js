import { call, put } from 'redux-saga/effects';

import { getHighStockData } from '../../services/highStockService';

import { getHighStockError, getHighStockSuccess } from '../../actions/highStockActions';

export function* highStockWorker(payload) {
  try {
    const data = yield call(getHighStockData, payload.payload);

    yield put(getHighStockSuccess(data));
  } catch (e) {
    yield put(getHighStockError(e));
  }
}
