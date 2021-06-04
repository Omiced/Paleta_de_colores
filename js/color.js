color.value = storage;
setColor();
//agregando evento al color
color.addEventListener("input", setColor);
color.addEventListener("change",  () => saveColor(color.value));