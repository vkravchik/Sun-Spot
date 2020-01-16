import axios from 'axios';

export function getHighStockData() {
  return axios.get('http://localhost:3001/api/charts/highStock').then(res => {
    return res.data;
  });
}
