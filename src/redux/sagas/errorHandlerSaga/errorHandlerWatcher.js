import { takeLatest } from 'redux-saga/effects';

import { removeErrorWorker, setErrorWorker } from './errorHandlerWorker';

import { DISPATCH_ERROR, DISPATCH_REMOVE_ERROR } from '../../../common/constants/dataConstants';

export default function* errorHandlerWatcher() {
  yield takeLatest(DISPATCH_ERROR, setErrorWorker);
  yield takeLatest(DISPATCH_REMOVE_ERROR, removeErrorWorker)
}
