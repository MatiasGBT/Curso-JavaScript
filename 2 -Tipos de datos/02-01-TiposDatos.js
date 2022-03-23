//String
var nombre = "Carlos";
console.log(nombre);

//Numerico
var numero = 1000;
console.log(numero);

//Objeto
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
};
console.log(objeto);

//Boolean
var bandera = true;
console.log(bandera);

//Tipo de dato function
function miFuncion(){};
console.log(miFuncion);

//Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Clase
class Persona {
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);

//Undefined (no definida)
var x;
console.log(x);

//Null (ausencia de valor)
var y = null;
console.log(y);

//Arrays
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);

//Cadena vacía
var z = "";
console.log(z);

//Las variables en JavaScript pueden cambiar su tipo de dato dinamicamente
//se puede usar typeof para saber cual es su valor
console.log(typeof nombre);
nombre = 10;
console.log(typeof nombre);