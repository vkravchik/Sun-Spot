import { put } from 'redux-saga/effects';

import { removeError, setError } from '../../actions/errorHandlerActions';

export function* setErrorWorker({payload}) {
  yield put(setError(payload));
}

export function* removeErrorWorker({payload}) {
  yield put(removeError())
}
