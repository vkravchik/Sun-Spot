import axios from 'axios';
import { BASE_URL } from "../../constants/demoConstants";

const collection = `users`;

export function getUserList() {
  return axios.get(`${BASE_URL}/${collection}`)
    .then(res => {
      return res.data
    });
}
