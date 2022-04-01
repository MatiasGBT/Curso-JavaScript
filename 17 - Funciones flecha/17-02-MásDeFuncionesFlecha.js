//Sintaxis normal de una función flecha
/*
const miFuncionFlecha = () => {
    console.log("Saludos desde miFuncionFlecha");
}
*/

//Sintaxis de una linea (no hace falta abrir el cuerpo de la función {})
/*
const miFuncionFlecha = () => console.log("Saludos desde mi función flecha");
miFuncionFlecha();
*/

//Si regresa parametros
/*
const saludar = () => {
    return "Saludos desde mi función flecha";
}
*/

//Simplificado a una línea de código (no hay que poner ni cuerpo de función {} ni return)
const saludar = () => "Saludos desde mi función flecha";
console.log(saludar());

//Regresar objeto - como los {} para instanciar los objetos se confunden con el del
//cuerpo de la función, hay que utilizar () antes
const regresaObjeto = () => ({nombre: "Juan", apellido: "Perez"});
console.log(regresaObjeto());

//Recibiendo parametros
const funcionConParametro = (mensaje) => console.log(mensaje);
funcionConParametro("Saludos con parametros");
const funcionConParametros = (op1, op2) => op1+op2;
console.log(funcionConParametros(3, 5));