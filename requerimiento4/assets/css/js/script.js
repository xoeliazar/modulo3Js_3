const colorBlue = document.getElementById("color-blue");
const colorRed = document.getElementById("color-red");
const colorGreen = document.getElementById("color-green");
const colorYellow = document.getElementById("color-yellow");

const pintar = (elemento, color = "black") => {
  elemento.style.backgroundColor = color;
};
colorBlue.addEventListener("click", () => pintar(colorBlue, "black"));
