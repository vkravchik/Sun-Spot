export const objectToQueryString = (obj) => {
  if (!obj) {
    return '';
  }
  return `?${Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&')}`;
};
