//Forma antigua de crear arrays en JavaScript
let autos1 = new Array("BMW", "Mercedes Benz", 2);
console.log(autos1);

//Forma actual
//es const porque apunta a la dirección de memoria
const autos2 = ["BMW", "Mercedes Benz", 2];
console.log(autos2);

//Modificar el valor de un indice
console.log(autos2[1]);
autos2[1] = "MercedesBenz";
console.log(autos2[1]);

//Para agregar elementos
autos2.push("Audi");
console.log(autos2);

//Agregar elementos con indice
console.log(autos2.length);
autos2[autos2.length] = "Cadillac";
console.log(autos2);

autos2[6] = "Porshe";
console.log(autos2);
//El indice 5 queda con un valor vacío. Esto no es recomendable.

//Para saber si es un arreglo
console.log(Array.isArray(autos2));