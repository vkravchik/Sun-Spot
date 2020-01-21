import {
  GET_HIGH_STOCK_REQUEST,
  GET_HIGH_STOCK_REQUEST_ERROR,
  GET_HIGH_STOCK_REQUEST_SUCCESS, TOGGLE_CHART,
  TOGGLE_CHART_TYPE
} from '../../constants/chartConstants';

const initialState = {
  isLoading: false,
  data: [],
  type: 'area',
  error: null,
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HIGH_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_HIGH_STOCK_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };

    case GET_HIGH_STOCK_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case TOGGLE_CHART_TYPE:
      return {
        ...state,
        isLoading: true,
      };

    case TOGGLE_CHART:
      return {
        ...state,
        isLoading: false,
        type: action.payload
      };

    default:
      return {
        ...state
      }
  }
};
