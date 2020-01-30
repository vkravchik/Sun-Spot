import { call, put } from 'redux-saga/effects';

import { getHighStockData } from '../../services/highStockService';

import { getHighStockSuccess } from '../../actions/highStockActions';
import { getHighStockSuccess } from "../../actions/highStockActions";
import { dispatchError } from "../../actions/errorHandlerActions";

export function* highStockWorker(payload) {
  try {
    const data = yield call(getHighStockData, payload.payload);

    yield put(getHighStockSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}
