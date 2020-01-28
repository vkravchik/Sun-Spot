import { call, put } from 'redux-saga/effects';

import { getHighStockConfig } from '../../services/highStockService';

import {
  HIGH_STOCK_CONFIG_FETCH_ERROR,
  HIGH_STOCK_CONFIG_FETCH_SUCCESS
} from '../../../common/constants/highStockConstants';

export function* sliderWorker({payload}) {
  try {
    const data = yield call(getHighStockConfig, payload);

    yield put({type: HIGH_STOCK_CONFIG_FETCH_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: HIGH_STOCK_CONFIG_FETCH_ERROR, payload: e})
  }
}
