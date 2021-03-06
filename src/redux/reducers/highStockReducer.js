import {
  HIGH_STOCK_DATA_FETCH,
  HIGH_STOCK_DATA_FETCH_SUCCESS
} from '../../common/constants/highStockConstants';

const initialState = {
  isLoading: false,
  data: []
};

export const highStockReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGH_STOCK_DATA_FETCH:
      return {
        ...state,
        isLoading: true,
        initialConfig: {
          ...state.initialConfig,
          defaultStart: action.payload?.start_date || null,
          defaultFinish: action.payload?.finish_date || null
        }
      };

    case HIGH_STOCK_DATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };

    default:
      return {
        ...state
      };
  }
};
