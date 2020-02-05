import {
  HEROES_PRIMARY_ATTR_FETCH,
  HEROES_PRIMARY_ATTR_FETCH_SUCCESS,
  HEROES_TYPE_ATTACK_FETCH,
  HEROES_TYPE_ATTACK_FETCH_SUCCESS
} from '../../common/constants/heroesConstants';

const initialState = {
  isLoading: false,
  data: [],
  dataAttackType: [],
  dataPrimaryAttr: []
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEROES_TYPE_ATTACK_FETCH:
      return {
        ...state,
        isLoading: true
      };

    case HEROES_TYPE_ATTACK_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataAttackType: action.payload
      };

    case HEROES_PRIMARY_ATTR_FETCH:
      return {
        ...state,
        isLoading: true
      };

    case HEROES_PRIMARY_ATTR_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataPrimaryAttr: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
