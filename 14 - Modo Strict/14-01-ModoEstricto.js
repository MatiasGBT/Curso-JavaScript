//En JS podemos empezar a utilizar una variable sin antes haberla declarado sin marcar ningun error,
//sin embargo, existe el modo estricto para evitar este tipo de malas prácticas
"use strict"; //Gracias a esto ya no nos deja usar variables no definidas

x = 10;
console.log(x);

miFuncion();

function miFuncion() {
    y = 25;
    console.log(y);
}

//Strict se puede usar al inicio del programa o dentro de una función en específico