import { call, put } from 'redux-saga/effects';

import { getHighStockConfig } from '../../services/highStockService';

import { getSliderConfigDataError, getSliderConfigDataSuccess } from '../../actions/sliderActions';
import { getSliderConfigDataSuccess } from "../../actions/sliderActions";
import { dispatchError } from "../../actions/errorHandlerActions";

export function* sliderWorker({payload}) {
  try {
    const data = yield call(getHighStockConfig, payload);

    yield put(getSliderConfigDataSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}
