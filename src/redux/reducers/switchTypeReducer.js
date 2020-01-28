import { TOGGLE_CHART } from '../../common/constants/switchTypeConstants';

const initialState = {
  highStockType: 'area',
};

export const switchTypeReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_CHART) {
    return {
      ...state,
      highStockType: action.payload
    };
  }
  return {
    ...state
  }
};
