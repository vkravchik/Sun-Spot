import { takeLatest } from "redux-saga/effects";
import { GET_HIGH_STOCK_REQUEST } from "../../../constants/chartConstants";
import { workerChartSaga } from "./workChartSaga";

export default function* watchChartSaga() {
  yield takeLatest(GET_HIGH_STOCK_REQUEST, workerChartSaga)
}
