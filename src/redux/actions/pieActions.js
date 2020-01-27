import { GET_PIE_REQUEST } from '../../common/constants/pieConstants';

export const getPieAction = (payload) => ({
  type: GET_PIE_REQUEST,
  payload
});
