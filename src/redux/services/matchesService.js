import axios from 'axios';

import { BASE_URL } from '../../common/constants/dataConstants';

export const getFbToTime = () => axios.get(`${BASE_URL}/api/matches/fb_to_time`).then((res) => res.data);

export const getMatchesData = () => axios.get(`${BASE_URL}/api/matches/`).then((res) => res.data);

export const getMatchesExpandedData = (matchId) => axios.get(`${BASE_URL}/api/matches`, {
  params: {
    matchId
  }
}).then((res) => res.data);
