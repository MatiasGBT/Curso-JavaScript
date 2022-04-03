//En una promesa no es necesario manejar la función de REJECTED obligatoriamente
let promesa = new Promise((RESOLVED) => {
    console.log("Inicio promesa");
    setTimeout(()=>RESOLVED("Saludos con promesa y timeout"), 3000);
});

//Como no procesamos el error no usamos catch
promesa.then(valor => console.log(valor));
//Puede ir cualquier otro código, no solo console.log

//Una promesa puede llamar en su código a otra promesa