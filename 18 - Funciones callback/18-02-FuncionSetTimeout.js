//Lamadas asíncronas con el uso de la función setTimeout
function miFuncionCallback() {
    console.log("Saludo asíncrono después de 3 segundos");
}

//El primer parámetro es la función de tipo callback y el segundo el tiempo que
//se esperara hasta que se ejecute la función
//el tiempo se establece en milisegundos (3 segundos)
setTimeout(miFuncionCallback, 3000);

//Después de 4 segundos iniciado el programa
setTimeout(function(){console.log("Saludo asíncrono 2 después de 4 segundos")}, 4000);

setTimeout(()=>console.log("Saludo asíncrono 3 después de 1 segundo"), 1000);