import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_REQUEST_ERROR,
  GET_USER_LIST_REQUEST_SUCCESS
} from "../../constants/demoConstants";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case GET_USER_LIST_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
