import {
  GET_HIGH_STOCK_CONFIG_REQUEST,
  SET_HIGH_STOCK_CONFIG_REQUEST
} from '../../common/constants/highStockConstants';

export const getSliderConfigAction = (payload) => ({
  type: GET_HIGH_STOCK_CONFIG_REQUEST,
  payload
});

export const setSliderConfigAction = (payload) => {
  return {
    type: SET_HIGH_STOCK_CONFIG_REQUEST,
    payload
  }
};
