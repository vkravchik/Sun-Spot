import { put } from 'redux-saga/effects';

import { setError } from '../../actions/errorHandlerActions';

export function* setErrorWorker({payload}) {
  yield put(setError(payload))
}
