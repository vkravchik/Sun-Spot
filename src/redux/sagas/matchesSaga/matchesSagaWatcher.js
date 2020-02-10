import { takeLatest } from 'redux-saga/effects';

import {
  MATCHES_DATA_FETCH,
  MATCHES_EXPANDED_DATA_FETCH,
  MATCHES_FB_TO_TIME_FETCH, START_SET_NESTED_OBJECT
} from '../../../common/constants/matchesConstants';
import {
  fbToTimeWorker,
  getDataWorker,
  getExpandedDataWorker, setNestedObjectWorker
} from './matchesSagaWorker';

export default function* matchesSagaWatcher() {
  yield takeLatest(MATCHES_FB_TO_TIME_FETCH, fbToTimeWorker);
  yield takeLatest(MATCHES_DATA_FETCH, getDataWorker);
  yield takeLatest(MATCHES_EXPANDED_DATA_FETCH, getExpandedDataWorker);
  yield takeLatest(START_SET_NESTED_OBJECT, setNestedObjectWorker);
}
