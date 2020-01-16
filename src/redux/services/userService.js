import axios from 'axios';

const collection = `users`;

export function getUserList() {
  return axios.get(`http://api.github.com/${collection}`)
    .then(res => {
      return res.data
    });
}
