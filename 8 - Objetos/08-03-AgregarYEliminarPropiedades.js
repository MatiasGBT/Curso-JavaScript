let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,

    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//JavaScript es muy flexible a la hora de agregar y eliminar
//propiedades "al vuelo", por eso es fácil hacerlo
persona.telefono = "55443322";
console.log(persona);

//Para eliminar propiedades/atributos usamos la palabra reservada delete
delete persona.telefono;
console.log(persona);

//Maneras de imprimir un objeto (si usamos la normal no se vería en el navegador)
//1 - Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido + ", " + persona.email);

//2 - Utilizando for in
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//3 - Metodo values
let personaArray = Object.values(persona); //Esta función devuelve un array
console.log(personaArray);

//4 - Metodo JSON stringify
let personaString = JSON.stringify(persona);
console.log(personaString);