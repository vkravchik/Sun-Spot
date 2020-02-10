import axios from 'axios';

import StorageService from './storageService';

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
  if (StorageService.getSliderConfig()) {
    return StorageService.getSliderConfig();
  }

  return axios.get(`${BASE_URL}/api/charts/highStock/config`)
    .then((res) => {
      StorageService.setSliderConfig(JSON.stringify(res.data));

      return res.data;
    });
}
