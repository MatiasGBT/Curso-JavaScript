//Await esperara el resultado de una promesa
//Ejemplo async con await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con Await");
    });
    console.log(await miPromesa);
}

//Ya no es necesario procesar el valor con then
funcionConPromesaYAwait();

//No se puede utilizar la palabra reservada await si no se encuentra dentro de
//una función que inicia con la palabra reservada await