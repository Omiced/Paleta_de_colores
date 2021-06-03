"user strict";
const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

//agregando evento al color
color.addEventListener("input", () => {
    const colorValue = color.value; //obtención del valor del color seleccionado
    salida.innerHTML = colorValue; //se actualiza el texto de acuerdo al valor del color
    salida.style.background = colorValue;
});