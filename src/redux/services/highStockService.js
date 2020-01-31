import axios from 'axios';
import { BASE_URL } from '../../common/constants/dataConstants';

export function getHighStockData(payload) {
  const startDate = payload?.startDate || null;
  const finishDate = payload?.finishDate || null;

  return axios.get(`${BASE_URL}/api/charts/highStock`, {
    params: {
      startDate,
      finishDate
    }
  }).then((res) => res.data);
}

export function getHighStockConfig() {
  return axios.get(`${BASE_URL}/api/charts/highStock/config`)
    .then((res) => res.data);
}
