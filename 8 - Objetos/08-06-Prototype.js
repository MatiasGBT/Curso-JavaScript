function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}

//Podemos agregarle propiedades a todos los objetos con Prototype
Persona.prototype.telefono = "44332211"; //Valor por defecto

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
padre.telefono = "55443322";
console.log(padre.telefono);

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre.telefono);