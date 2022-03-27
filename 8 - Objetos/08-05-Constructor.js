//Un constructor es una función especial, es recomendable que su nombre empiece en mayúscula
//Función constructor de tipo Persona:
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}

//Esto permite crear varios objetos con una estructura
let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre);

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre);

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());