import { call, put } from 'redux-saga/effects';

import { dispatchError } from '../../actions/errorHandlerActions';
import { getFbToTime, getMatchesData, getMatchesExpandedData } from '../../services/matchesService';
import {
  stopShowExpandedRow,
  getExpandedMatchesListSuccess,
  getFbToTimeSuccess,
  getMatchesListSuccess
} from '../../actions/matchesActions';

export function* fbToTimeWorker() {
  try {
    const data = yield call(getFbToTime);

    yield put(getFbToTimeSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}

export function* getDataWorker() {
  try {
    const data = yield call(getMatchesData);

    yield put(getMatchesListSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}

export function* getExpandedDataWorker({ payload }) {
  try {
    const data = yield call(getMatchesExpandedData, payload);

    yield put(getExpandedMatchesListSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}

export function* setNestedObjectWorker({ payload }) {
  yield put(stopShowExpandedRow(payload));
}
