import axios from 'axios';

import { BASE_URL } from '../../common/constants/dataConstants';

export const getAttackType = () => axios.get(`${BASE_URL}/api/heroes/attack_type`).then((res) => res.data);
export const getPrimaryAttr = () => axios.get(`${BASE_URL}/api/heroes/primary_attr`).then((res) => res.data);
export const filteringByRole = () => axios.get(`${BASE_URL}/api/heroes/filter_by_roles`).then((res) => res.data);
