import axios from 'axios';

import { BASE_URL } from '../../common/constants/dataConstants';

export function getCustomChartData(matchId) {
  return axios.get(`${BASE_URL}/api/matches/custom`, {
    params: {
      matchId
    }
  }).then((res) => res.data);
}
