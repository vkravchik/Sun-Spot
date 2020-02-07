import {
  MATCHES_DATA_FETCH,
  MATCHES_DATA_FETCH_SUCCESS,
  MATCHES_EXPANDED_DATA_FETCH,
  MATCHES_EXPANDED_DATA_FETCH_SUCCESS,
  MATCHES_FB_TO_TIME_FETCH,
  MATCHES_FB_TO_TIME_FETCH_SUCCESS
} from '../../common/constants/matchesConstants';

const initialState = {
  isLoading: false,
  data: [],
  ratioFbTimeToGameTime: [],
  nestedData: [],
  expandedData: []
};

export const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCHES_FB_TO_TIME_FETCH:
      return {
        ...state,
        isLoading: true
      };

    case MATCHES_FB_TO_TIME_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ratioFbTimeToGameTime: action.payload
      };

    case MATCHES_DATA_FETCH:
      return {
        ...state,
        isLoading: true
      };

    case MATCHES_DATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case MATCHES_EXPANDED_DATA_FETCH:
      return {
        ...state,
        isLoading: true
      };

    case MATCHES_EXPANDED_DATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nestedData: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
