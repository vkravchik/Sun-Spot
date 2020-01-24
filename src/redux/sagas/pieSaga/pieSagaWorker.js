import { call, put } from "redux-saga/effects";

import { getPieData } from "../../services/pieService";

import { GET_PIE_REQUEST_ERROR, GET_PIE_REQUEST_SUCCESS } from "../../../common/constants/pieConstants";

export function* pieWorker(payload) {
  try {

    const data = yield call(getPieData, payload.payload);

    yield put({type: GET_PIE_REQUEST_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: GET_PIE_REQUEST_ERROR, payload: e})
  }
}
