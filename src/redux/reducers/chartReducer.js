import {
  GET_CHART_CONFIG_REQUEST, GET_CHART_CONFIG_REQUEST_ERROR, GET_CHART_CONFIG_REQUEST_SUCCESS,
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
  initialConfig: {
    min: null,
    max: null,
    defaultStart: null,
    defaultFinish: null
  }
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

    case GET_CHART_CONFIG_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_CHART_CONFIG_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        initialConfig: action.payload,
        error: null
      };

    case GET_CHART_CONFIG_REQUEST_ERROR:
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
