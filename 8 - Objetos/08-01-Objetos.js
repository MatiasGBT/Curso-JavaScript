let persona1 = {
    //Propiedades/atributos
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,

    //Metodos
    //Funcion de tipo expresión
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona1.nombreCompleto());

//Creación de nuevos objetos - es diferente al otro objeto
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion="Saturno 15";
persona2.telefono="55443322";
console.log(persona2.telefono);