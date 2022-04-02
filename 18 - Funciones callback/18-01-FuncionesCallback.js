//Una función de tipo callback es una función que se pasa como parámetro a otra función
//esto permite llamar una función dentro de otra función

//Función callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(res);
}

sumar(5, 3, imprimir); //Sin paréntesis ()

//En las funciónes callback se producen llamadas asíncronas, es decir, llama y ejecuta una función
//mientras la función base sigue funcionando, haciendo varias cosas a la vez.