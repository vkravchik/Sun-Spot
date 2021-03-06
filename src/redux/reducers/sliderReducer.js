import {
  HIGH_STOCK_CONFIG_FETCH, HIGH_STOCK_CONFIG_FETCH_SUCCESS, HIGH_STOCK_CONFIG_SET
} from '../../common/constants/highStockConstants';

const initialState = {
  error: null,
  isLoading: false,
  initialConfig: {
    min: null,
    max: null,
    defaultStart: null,
    defaultFinish: null
  }
};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGH_STOCK_CONFIG_FETCH:
      return {
        ...state,
        isLoading: true
      };

    case HIGH_STOCK_CONFIG_SET:
      return {
        ...state,
        initialConfig: {
          ...state.initialConfig,
          defaultStart: action.payload?.startDate || null,
          defaultFinish: action.payload?.finishDate || null
        }
      };

    case HIGH_STOCK_CONFIG_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        initialConfig: action.payload
      };

    default: {
      return {
        ...state
      };
    }
  }
};
