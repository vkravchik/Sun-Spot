import { put } from "redux-saga//effects";
import { TOGGLE_CHART } from "../../../common/constants/switchTypeConstants";

export function* toggleChartTypeWorker({payload}) {
  yield put({type: TOGGLE_CHART, payload})
}
