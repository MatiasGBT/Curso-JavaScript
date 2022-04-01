"use strict";

//Con la clausula throw podremos arrojar nuestros propios errores.

let resultado = 0;
try {
    if (isNaN(resultado)) throw "No es un número";
    else if (resultado == "") throw "Es una cadena vacía";
    else if (resultado > 0) throw "Valor positivo";
    else if (resultado < 0) throw "Valor negativo";
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}