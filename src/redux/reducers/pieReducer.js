import { GET_PIE_DATA_FETCH, GET_PIE_DATA_FETCH_SUCCESS } from '../../common/constants/pieConstants';

const initialState = {
  isLoading: false,
  data: []
};

export const pieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIE_DATA_FETCH: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_PIE_DATA_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
