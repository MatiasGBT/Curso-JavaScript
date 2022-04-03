//La palabra reservada Async permite facilitar el uso de promesas, ya que, al ponerla
//antes de la definición de un método, este esta obligado a regresar una promesa.

//Es como si esta función devolviera el valor de RESOLVED
async function miFuncionConPromesa() {
    return "Saludos con promesa y async";
}
miFuncionConPromesa().then(valor => console.log(valor));