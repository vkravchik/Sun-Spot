import { takeLatest } from "redux-saga/effects";
import { GET_USER_LIST_REQUEST } from "../../constants/demoConstants";

import {workerDemoRequestSaga} from './workDemoSaga'

export default function* watchDemoSaga() {
  yield takeLatest(GET_USER_LIST_REQUEST, workerDemoRequestSaga);
}
