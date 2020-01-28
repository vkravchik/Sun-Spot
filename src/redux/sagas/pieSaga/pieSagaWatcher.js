import { takeLatest } from 'redux-saga/effects';

import { GET_PIE_DATA_FETCH } from '../../../common/constants/pieConstants';
import { pieWorker } from './pieSagaWorker';

export default function* pieSagaWatcher() {
  yield takeLatest(GET_PIE_DATA_FETCH, pieWorker);
}
