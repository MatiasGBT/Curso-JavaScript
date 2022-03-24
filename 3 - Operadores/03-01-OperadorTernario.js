//Un operador ternario tiene tres partes:
//1 - La condición
//2 - La expresión 1, esta se activa cuando la condición es verdadera
//3 - La expresión 2, esta se activa cuando la condición es falsa
let resultado1 = 3>2 ? "verdadero" : "falso";
console.log(resultado1);

let resultado2 = 2>3 ? "verdadero" : "falso";
console.log(resultado2);

let resultado3 = 1==2 ? "verdadero" : 0;
console.log(resultado3);

let num1 = 9;
let resultado4 = num1%2==0 ? "Número par" : "Número impar";
console.log(resultado4);

let num2 = 3, num3 = 7;
let resultado5 = 3==3 ? ++num2 : num3;
console.log(resultado5);