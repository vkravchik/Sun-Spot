import { takeLatest } from 'redux-saga/effects';

import {
  MATCHES_DATA_FETCH,
  MATCHES_EXPANDED_DATA_FETCH,
  MATCHES_FB_TO_TIME_FETCH
} from '../../../common/constants/matchesConstants';
import {
  fbToTimeWorker,
  getDataWorker,
  getExpandedDataWorker
} from './matchesSagaWorker';

export default function* matchesSagaWatcher() {
  yield takeLatest(MATCHES_FB_TO_TIME_FETCH, fbToTimeWorker);
  yield takeLatest(MATCHES_DATA_FETCH, getDataWorker);
  yield takeLatest(MATCHES_EXPANDED_DATA_FETCH, getExpandedDataWorker);
}
