import { TOGGLE_CHART_TYPE_FINISH } from '../../common/constants/switchTypeConstants';

const initialState = {
  highStockChartType: 'area'
};

export const switchTypeReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_CHART_TYPE_FINISH) {
    return {
      ...state,
      highStockChartType: action.payload
    };
  }

  return {
    ...state
  }
};
