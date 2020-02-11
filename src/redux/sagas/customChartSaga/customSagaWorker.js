import { call, put } from 'redux-saga/effects';

import { getCustomChartData } from '../../services/customChartService';
import { finishCreateCustomChart } from '../../actions/customChartActions';
import { dispatchError } from '../../actions/errorHandlerActions';

export function* myChartWorker({ payload }) {
  try {
    const data = yield call(getCustomChartData, payload);

    yield put(finishCreateCustomChart(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}
