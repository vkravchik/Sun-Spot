export const titleCase = (str) => {
  let strArray = str.split('_');

  strArray = strArray.map((el) => el.charAt(0).toUpperCase() + el.substring(1));

  return strArray.join(' ');
};
