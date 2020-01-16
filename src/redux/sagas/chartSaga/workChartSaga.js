import { GET_HIGH_STOCK_REQUEST_ERROR, GET_HIGH_STOCK_REQUEST_SUCCESS } from "../../../constants/chartConstants";
import { call, put } from "redux-saga/effects";
import { getHighStockData } from "../../services/chartService";

export function* workerChartSaga({payload}) {
  try {
    const data = yield call(getHighStockData, payload);

    yield put({type: GET_HIGH_STOCK_REQUEST_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: GET_HIGH_STOCK_REQUEST_ERROR, payload: e})
  }
}
