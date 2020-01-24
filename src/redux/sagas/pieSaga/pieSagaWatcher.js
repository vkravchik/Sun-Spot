import { takeLatest } from 'redux-saga/effects';

import { GET_PIE_REQUEST } from "../../../common/constants/pieConstants";
import { pieWorker } from "./pieSagaWorker";

export default function* pieSagaWatcher() {
  yield takeLatest(GET_PIE_REQUEST, pieWorker);
}
