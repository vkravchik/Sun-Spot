import { BASE_URL } from '../../common/constants/dataConstants';

import { objectToQueryString } from '../../common/utils/fetchDataUtils';

export const getPieData = async (payload) => {
  const params = objectToQueryString(payload);

  const data = await fetch(`${BASE_URL}/api/charts/pie${params}`);

  return await data.json();
};
