import { MATCHES_FB_TO_TIME_FETCH, MATCHES_FB_TO_TIME_FETCH_SUCCESS } from '../../common/constants/matchesConstants';

const initialState = {
  isLoading: false,
  data: [],
  ratioFbTimeToGameTime: []
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

    default:
      return {
        ...state
      };
  }
};
