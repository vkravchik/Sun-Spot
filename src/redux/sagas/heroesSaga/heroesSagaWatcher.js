import { takeLatest } from 'redux-saga/effects';

import { HEROES_PRIMARY_ATTR_FETCH, HEROES_TYPE_ATTACK_FETCH } from '../../../common/constants/heroesConstants';
import { attackTypeWorker, primaryAttrWorker } from './heroesSagaWorker';

export default function* heroesSagaWatcher() {
  yield takeLatest(HEROES_TYPE_ATTACK_FETCH, attackTypeWorker);
  yield takeLatest(HEROES_PRIMARY_ATTR_FETCH, primaryAttrWorker);
}
