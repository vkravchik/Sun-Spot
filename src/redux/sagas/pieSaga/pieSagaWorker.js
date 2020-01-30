import { call, put } from 'redux-saga/effects';

import { getPieData } from '../../services/pieService';

import { getPieDataSuccess } from '../../actions/pieActions';
import { dispatchError } from '../../actions/errorHandlerActions';

export function* pieWorker(payload) {
  try {
    const data = yield call(getPieData, payload.payload);

    yield put(getPieDataSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}
