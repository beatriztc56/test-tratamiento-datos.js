export default (json) => {
  const capitalice = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }; // Función que convierte la primera letra de cada palabra en mayúscula
  const data = json;
  const list = data.map((item) => {
    const nombre = capitalice(item.nombre);
    const apellido = capitalice(item.apellido);
    const apellido2 = capitalice(item.apellido2);
    return nombre + " " + apellido + " " + (apellido2 ? apellido2 : "");
  });
  return list;
};
