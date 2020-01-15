import { put, call } from "redux-saga/effects";
import { GET_USER_LIST_REQUEST_ERROR, GET_USER_LIST_REQUEST_SUCCESS } from "../../constants/demoConstants";

import {getUserList} from '../services/userService'

export function* workerDemoRequestSaga({payload}) {
  try {
    const data = yield call(getUserList, payload);

    yield put({type: GET_USER_LIST_REQUEST_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: GET_USER_LIST_REQUEST_ERROR, payload: e});
  }

}
