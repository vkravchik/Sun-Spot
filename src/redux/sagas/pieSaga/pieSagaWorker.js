import { call, put } from 'redux-saga/effects';

import { getPieData } from '../../services/pieService';

import { getPieDataError, getPieDataSuccess } from "../../actions/pieActions";

export function* pieWorker(payload) {
  try {
    const data = yield call(getPieData, payload.payload);

    yield put(getPieDataSuccess(data))
  } catch (e) {
    yield put(getPieDataError(e))
  }
}
