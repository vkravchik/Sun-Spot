import { takeLatest } from 'redux-saga/effects';

import { MATCHES_FB_TO_TIME_FETCH } from '../../../common/constants/matchesConstants';
import { fbToTimeWorker } from './matchesSagaWorker';

export default function* matchesSagaWatcher() {
  yield takeLatest(MATCHES_FB_TO_TIME_FETCH, fbToTimeWorker);
}
