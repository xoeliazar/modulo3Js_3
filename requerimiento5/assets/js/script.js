// ● Crea una página junto a un script que guarde dentro de una variable global
// un color dependiendo de la letra del teclado presionada. (2 Puntos).
// ○ La letra a guardará el color rosado.
// ○ La letra s guardará el color naranjo.
// ○ La letra d guardará el color celeste.
// ○ Para guardar el color revisa el tip al final del enunciado.
// ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
// color blanco y borde negro.
// ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
// “key” a rosado, naranjo o celeste respectivamente.
// ● Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
// deberá crear un div nuevo de las mismas dimensiones antes mencionadas
// con los colores morado, gris y café respectivamente. (1 Punto)

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
