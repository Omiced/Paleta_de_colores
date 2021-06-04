//función que guarda el color en el localStorage
const saveColor = (value) => {
  colorList.push(value);
  localStorage.setItem("colorValue", JSON.stringify(value));
  localStorage.setItem("colorList", JSON.stringify(colorList));
  getColors();
};
