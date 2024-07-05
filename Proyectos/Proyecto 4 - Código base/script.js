// Declara aqui tus variables
let mario = document.querySelector(".mario");
let fin = document.querySelector(".finalizar");
let juego = document.querySelector(".juego");
let salto = document.querySelector(".saltar");
let moneda = document.querySelector(".moneda");
let bajar = document.querySelector(".bajar");
let color = document.querySelector(".cambiar-color");
let score = document.querySelector(".score");
let boton_puntaje = document.querySelector(".actualizar-puntaje");
let crecer = document.querySelector(".crecer");
let decrecer = document.querySelector(".decrecer");
let botonDerecha = document.querySelector(".derecha");
/* Problema 1:Cuando se presione el botón "Saltar", Mario debe subir 
hasta donde esta la moneda, y esta debe desaparecer */

salto.onclick = function () {
  const posicionArriba = "140px" ;
  mario.style.bottom = posicionArriba
  if (mario.style.left === moneda.style.left){

    moneda.style.visibility ="hidden"
  }

};
/*Problema 2 : Cuando se presione de nuevo el boton "Bajar" Mario baja al nivel del suelo de nuevo */

bajar.onclick = function () {
  const posicionAbajo = "35px"
  mario.style.bottom = posicionAbajo;
}
// 3: Cuando el botón "Cambiar el color" es presionado, el color de fondo cambia

color.onclick = function () {
  document.body.style.backgroundColor = "red"
}
// 4: Cuando el botón "Finalizar juego" es presionado, el título de la página dice "Game over"
fin.onclick = function () {
  juego.innerHTML = "GAME OVER"
}
// 5: Cuando el botón "Actualizar Puntaje" es presionado, el contador de puntuación se establece en "1" en lugar de 0

boton_puntaje.onclick = function () { 
  score.textContent =parseInt(score.textContent)+ 100
}
// 6: Cuando el botón "Crecer" es presionado, la imagen de Mario se debe hacer más grande.

crecer.onclick = function () {
  console.log(mario.style.height)
  mario.style.height =(parseInt(mario.style.height)+20 || 50) + "px";
}

decrecer.onclick = function () { 
  mario.style.width =parseInt(mario.style.width)-100 + "px";
  mario.style.height =(parseInt(mario.style.height)-20 || 50) + "px";
}

//7: Ya el boton de mover a la derecha esta hecho. Haz ahora uno para que se mueva a la izquierda.

botonDerecha.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; // Obtener la posición actual (si no la consigue empienza en 75)
  const cantidadPixelesPorPaso = 10; // Cantidad de píxeles a mover
  const limiteDerecha = 700; // 700px es lo maximo que se va a mover para que no se salga de la pantalla

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteDerecha) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};

// Haz aqui el boton de mover a la izquierda
let botonIzquierda = document.querySelector(".Izquierda");
botonIzquierda.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75;
  const cantidadPixelesPorPaso = 10;
  const limiteIzquierda = -15; 

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual - cantidadPixelesPorPaso;
  if (nuevaPosicion >= limiteIzquierda) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};