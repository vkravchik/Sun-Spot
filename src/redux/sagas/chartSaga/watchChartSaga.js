import { takeLatest } from 'redux-saga/effects';
import { GET_HIGH_STOCK_REQUEST, TOGGLE_CHART_TYPE } from '../../../constants/chartConstants';
import { toggleChartTypeSaga, workerChartSaga } from './workChartSaga';

export default function* watchChartSaga() {
  yield takeLatest(GET_HIGH_STOCK_REQUEST, workerChartSaga);
  yield takeLatest(TOGGLE_CHART_TYPE, toggleChartTypeSaga)
}
