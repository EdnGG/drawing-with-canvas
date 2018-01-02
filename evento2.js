let click = 0;
const colorLinea = "green";

const area = document.getElementById('canvas');
const papel = area.getContext("2d");
let x;
let y;

document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

// Borde de Canvas
dibujarLinea("blue", 0, 0, 300, 0, papel)
dibujarLinea("blue", 300, 0, 300, 300, papel)
dibujarLinea("blue", 300, 300, 0, 300, papel)
dibujarLinea("blue", 0, 300, 0, 0, papel)

// Funcion que contiene las caracteristicas de la linea que sera dibujada
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, papel){

 papel.beginPath();                  // Inicia el trazo
 papel.strokeStyle = color;          // Estilo de trazo (color)
 papel.lineWidth = 3;                // Ancho de la linea
 papel.moveTo(xinicial, yinicial);   // Donde comienza la linea
 papel.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
 papel.stroke();                     // Dibuja con el estio de trazo
 papel.closePath();                  // Cierra el dibujo
}

// Funcion para el evento "mouseMove"
function mouseMove(e){
  console.log(e);

 if (click == 1) {
   dibujarLinea(colorLinea, x, y, e.layerX, e.layerY, papel);
 }
 x = e.layerX;
 y = e.layerY;
}

// Funcion para el evento  "mouseDown"
function mouseDown(e){
  console.log(e);
 click = 1;
 x = e.layerX;
 y = e.layerY;
}

// Funcion para el evento "mouseUp"
function mouseUp(e){
  console.log(e);
 click = 0;
 x = e.layerX;
 y = e.layerY;
}
