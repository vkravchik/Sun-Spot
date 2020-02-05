import { call, put } from 'redux-saga/effects';

import {
  getHeroesAttackTypeSuccess,
  getHeroesPrimaryAttrSuccess
} from '../../actions/heroesActions';
import { dispatchError } from '../../actions/errorHandlerActions';
import { getAttackType, getPrimaryAttr } from '../../services/heroesService';

export function* attackTypeWorker() {
  try {
    const data = yield call(getAttackType);

    yield put(getHeroesAttackTypeSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}

export function* primaryAttrWorker() {
  try {
    const data = yield call(getPrimaryAttr);

    yield put(getHeroesPrimaryAttrSuccess(data));
  } catch (e) {
    yield put(dispatchError(e));
  }
}
