import { call, put } from 'redux-saga/effects';

import { dispatchError } from '../../actions/errorHandlerActions';
import { getFbToTime } from '../../services/matchesService';
import { getFbToTimeSuccess } from '../../actions/matchesActions';

export function* fbToTimeWorker() {
  try {
    const data = yield call(getFbToTime);

    yield put(getFbToTimeSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}
