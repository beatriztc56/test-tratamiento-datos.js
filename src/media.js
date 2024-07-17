export default (json) => {
  const data = json;
  const age = data.map((item) => item.edad);
  const suma = age.reduce((acc, num) => acc + num, 0);
  const media = suma / age.length;

  return media;
};
