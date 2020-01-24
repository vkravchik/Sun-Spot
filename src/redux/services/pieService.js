import { BASE_URL } from "../../common/constants/dataConstants";

export const getPieData = async () => {
  const data = await fetch(`${BASE_URL}/api/charts/pie`);

  return await data.json();
};
