import { ADD_ERROR, REMOVE_ERROR } from "../../common/constants/dataConstants";

const initialState = {
  error: []
};

export const errorHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR: {
      return {
        ...state,
        error: state.error.concat(action.payload)
      }
    }

    case REMOVE_ERROR: {
      state.error.pop();
      return {
        ...state,
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
};
