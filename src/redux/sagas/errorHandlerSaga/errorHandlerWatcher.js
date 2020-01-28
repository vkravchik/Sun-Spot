import { takeLatest } from 'redux-saga/effects';

import { setErrorWorker } from './errorHandlerWorker';

import { DISPATCH_ERROR } from '../../../common/constants/dataConstants';

export default function* errorHandlerWatcher() {
  yield takeLatest(DISPATCH_ERROR, setErrorWorker)
}
