import { call, put } from "redux-saga/effects";

import { getHighStockConfig } from "../../services/highStockService";

import {
  GET_HIGH_STOCK_CONFIG_REQUEST_ERROR,
  GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS
} from "../../../common/constants/highStockConstants";

export function* sliderWorker({payload}) {
  try {
    const data = yield call(getHighStockConfig, payload);

    yield put({type: GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS, payload: data})
  } catch (e) {
    yield put({type: GET_HIGH_STOCK_CONFIG_REQUEST_ERROR, payload: e})
  }
}
