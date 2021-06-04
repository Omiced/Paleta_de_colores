const setColor = () => {
  const value = color.value; //obtención del valor del color seleccionado
  salida.innerHTML = value; //se actualiza el texto de acuerdo al valor del color
  salida.style.background = value;
};

