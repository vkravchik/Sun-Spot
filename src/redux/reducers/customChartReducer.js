import { FINISH_CHART_CREATE, START_CHART_CREATE } from '../../common/constants/customChart';

const initialState = {
  isLoading: false,
  data: null
};

export const customChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_CHART_CREATE:
      return {
        ...state,
        isLoading: true
      };

    case FINISH_CHART_CREATE:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
