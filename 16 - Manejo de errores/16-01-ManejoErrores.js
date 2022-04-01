"use strict";

/*
x = 10;
console.log("Continuamos"); //No se ejecuta debido al error de que x no esta definida
*/

try {
    x = 10;
    //miFuncion(); esta funcion tambien arroja error porque no esta definida
} catch (error) {
    console.log(error);
} finally {
    console.log("Termina la revisión de errores"); //Se ejecuta siempre
}
console.log("Continuamos");