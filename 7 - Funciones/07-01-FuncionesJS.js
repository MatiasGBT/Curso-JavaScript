//Hoisting: podemos llamar la función desde cualquier parte del código
miFuncion(5, 5);

//Declaración de la función
function miFuncion(a, b) {
    console.log("Suma: " + (a+b));
}

miFuncion(2, 3);