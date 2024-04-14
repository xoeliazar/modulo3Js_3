// 3. Construye una página web 4_colores.html con las siguientes características (Total:
//     5 puntos)
//     ● Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
//     amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
//     un identificador único. (1 Punto)
//     ● Dentro del script agrega el evento para que al hacer click a cada uno de los
//     divs, este cambie de color al color negro. Utiliza addEventListener para
//     agregar el evento. (1 Punto)

const azul = document.getElementById("color-blue");
const rojo = document.getElementById("color-red");
const verde = document.getElementById("color-green");
const amarillo = document.getElementById("color-yellow");

const cambiarColor = (elemento) => (elemento.style.backgroundColor = "black");

azul.addEventListener("click", () => {
  cambiarColor(azul);
});
rojo.addEventListener("click", () => {
  cambiarColor(rojo);
});
verde.addEventListener("click", () => {
  cambiarColor(verde);
});
amarillo.addEventListener("click", () => {
  cambiarColor(amarillo);
});
