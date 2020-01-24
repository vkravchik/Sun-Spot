import {
  GET_HIGH_STOCK_CONFIG_REQUEST, GET_HIGH_STOCK_CONFIG_REQUEST_ERROR, GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS,
  GET_HIGH_STOCK_REQUEST,
  GET_HIGH_STOCK_REQUEST_ERROR,
  GET_HIGH_STOCK_REQUEST_SUCCESS
} from '../../common/constants/highStockConstants';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
  initialConfig: {
    min: null,
    max: null,
    defaultStart: null,
    defaultFinish: null
  }
};

export const highStockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HIGH_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
        initialConfig: {
          ...state.initialConfig,
          defaultStart: action.payload?.start_date || null,
          defaultFinish: action.payload?.finish_date || null,
        }
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

    case GET_HIGH_STOCK_CONFIG_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        initialConfig: action.payload,
        error: null
      };

    case GET_HIGH_STOCK_CONFIG_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return {
        ...state
      }
  }
};
