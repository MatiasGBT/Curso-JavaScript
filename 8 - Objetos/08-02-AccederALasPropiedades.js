let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,

    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//Similar a un array, se puede acceder a sus atributos con corchetes
console.log(persona["nombre"]);
//Tiene que ir como cadena

//Esto sirve debido a que se puede acceder a todas las propiedades
//de nuestro objeto con un ciclo for especial (for in)
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
//in quiere decir que va a recorrer todas las propiedades dentro del objeto persona