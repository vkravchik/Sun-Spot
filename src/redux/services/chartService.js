import axios from 'axios';
import { BASE_URL } from "../../constants/dataConstants";

export function getHighStockData() {
  return axios.get(`${BASE_URL}/api/charts/highStock`).then(res => {
    return res.data;
  });
}
