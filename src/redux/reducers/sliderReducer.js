import {
  GET_HIGH_STOCK_CONFIG_REQUEST, GET_HIGH_STOCK_CONFIG_REQUEST_ERROR,
  GET_HIGH_STOCK_CONFIG_REQUEST_SUCCESS, SET_HIGH_STOCK_CONFIG_REQUEST
} from '../../common/constants/highStockConstants';

const initialState = {
  isLoading: false,
  initialConfig: {
    min: null,
    max: null,
    defaultStart: null,
    defaultFinish: null
  },
  error: null
};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_HIGH_STOCK_CONFIG_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case SET_HIGH_STOCK_CONFIG_REQUEST:
      return {
        ...state,
        initialConfig: {
          ...state.initialConfig,
          defaultStart: action.payload?.start_date || null,
          defaultFinish: action.payload?.finish_date || null
        }
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

    default: {
      return {
        ...state
      }
    }
  }
};
