import axios from 'axios';
import { BASE_URL } from '../../constants/dataConstants';
import { getInitialChartConfigAction } from "../actions/chartActions";

export function getHighStockData(payload) {
  const start_date = payload?.start_date || null;
  const finish_date = payload?.finish_date || null;

  return axios.get(`${BASE_URL}/api/charts/highStock`, {
    params: {
      start_date,
      finish_date
    }
  }).then(res => {
    return res.data;
  });
}

export function getInitialConfigData() {
  return axios.get(`${BASE_URL}/api/charts/highStock/config`)
    .then(res => {
      return res.data;
    });
}
