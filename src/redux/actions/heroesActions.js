import { createAction } from 'redux-actions';

import {
  HEROES_TYPE_ATTACK_FETCH,
  HEROES_TYPE_ATTACK_FETCH_SUCCESS,
  HEROES_PRIMARY_ATTR_FETCH,
  HEROES_PRIMARY_ATTR_FETCH_SUCCESS
} from '../../common/constants/heroesConstants';

export const getHeroesAttackType = createAction(HEROES_TYPE_ATTACK_FETCH);
export const getHeroesAttackTypeSuccess = createAction(HEROES_TYPE_ATTACK_FETCH_SUCCESS);

export const getHeroesPrimaryAttr = createAction(HEROES_PRIMARY_ATTR_FETCH);
export const getHeroesPrimaryAttrSuccess = createAction(HEROES_PRIMARY_ATTR_FETCH_SUCCESS);
