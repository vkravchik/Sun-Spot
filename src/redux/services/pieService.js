import { BASE_URL } from "../../common/constants/dataConstants";

export const getPieData = async (payload) => {
  const params = objectToQueryString(payload);

  const data = await fetch(`${BASE_URL}/api/charts/pie${params}`);

  return await data.json();
};

function objectToQueryString(obj) {
  if (!obj) {
    return '';
  }
  return '?' + Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}
