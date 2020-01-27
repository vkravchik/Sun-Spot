import { GET_PIE_REQUEST, GET_PIE_REQUEST_ERROR, GET_PIE_REQUEST_SUCCESS } from '../../common/constants/pieConstants';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const pieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_PIE_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      }
    }

    case GET_PIE_REQUEST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
};
