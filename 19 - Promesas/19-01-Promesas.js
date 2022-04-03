/*
En una promesa se utilizan funciones de tipo callback
Una promesa es código que tiene varios estados, por lo que podremos lanzar
una petición para procesar un código en caso de que la promesa se haya resuelto
correctamente (RESOLVED).
Si el código da problemas, se llama al caso de REJECTED (rechazado).
Es decir, hay dos caminos, uno donde se ejecuta el código correctamente, y otro en
donde devuelva error. Mientras la promesa no haya terminado de ejecutar su código,
esta se encuentra en estado de pendiente.
*/

//Para procesar una promesa resuelta, se utiliza el método then(), caso contrario
//se utiliza el método catch().
//Tiene dos parámetros: dos funciones de tipo callback, una en caso de que se resuelva
//correctamente, y otra en caso contrario.
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion) {
        resolved("Resolvió correctamente");
    } else {
        rejected("Se produjo un error");
    }
});

//Dos funciones de tipo flecha como argumentos
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
//En este caso utilizamos el catch() como segundo argumento, pero esto se puede modificar:
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));