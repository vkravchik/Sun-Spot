import { put } from 'redux-saga/effects';

import { toggleChartTypeFinish } from '../../actions/switchTypeActions';

export function* toggleChartTypeWorker({payload}) {
  yield put(toggleChartTypeFinish(payload))
}
