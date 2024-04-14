const color = "";

const cambiarColor = (color) => {
  const elemento = document.getElementById("key");
  elemento.style.backgroundColor = color;
};

function crearNuevoDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = color;
  nuevoDiv.style.border = "2px solid black";
  document.body.appendChild(nuevoDiv);
}
document.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    cambiarColor("pink");
  } else if (event.key === "s" || event.key === "S") {
    cambiarColor("orange");
  } else if (event.key === "d" || event.key === "D") {
    cambiarColor("lightblue");
  } else if (event.key === "q" || event.key === "Q") {
    crearNuevoDiv("purple");
  } else if (event.key === "w" || event.key === "W") {
    crearNuevoDiv("gray");
  } else if (event.key === "e" || event.key === "E") {
    crearNuevoDiv("brown");
  }
});
