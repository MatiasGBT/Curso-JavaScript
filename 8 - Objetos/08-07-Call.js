//El método Call permite llamar métodos definidos en unos objetos pero desde otros objetos

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",

    nombreCompleto: function(titulo, telefono) {
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + telefono;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Uso de Call para utilizar el método persona1.nombreCompleto() con los datos del objeto persona2
console.log(persona1.nombreCompleto("Lic", "44332211"));

console.log(persona1.nombreCompleto.call(persona2, "Ing", "55443322"));
//Esto se puede hacer debido a que ambos objetos tienen la misma estructura (mismos atributos)
//Como se ve también se pueden enviar parametros al método.

//A su vez, esto se puede realizar con el método Apply, sin embargo, esto tiene una diferencia cuando
//pasamos parámetros, ya que estos se pasan en forma de arreglo
let array = ["Ing", "55443322"];
console.log(persona1.nombreCompleto.apply(persona2, array));