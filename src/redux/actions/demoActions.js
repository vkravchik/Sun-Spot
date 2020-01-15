import { GET_USER_LIST_REQUEST } from "../../constants/demoConstants";

export const getUserListAction = (payload) => ({
  type: GET_USER_LIST_REQUEST,
  payload
});
