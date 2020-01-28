import { ADD_ERROR, REMOVE_ERROR } from "../../common/constants/dataConstants";

const initialState = {
  error: null
};

export const errorHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }

    case REMOVE_ERROR: {
      return {
        ...state,
        error: []
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
};
