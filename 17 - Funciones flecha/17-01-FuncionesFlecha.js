//Sintaxis de función clásica
function miFuncion() {
    console.log("Saludos desde miFuncion");
}

miFuncion();

//Sintaxis función flecha (son anónimas)
//miFuncionFlecha(); No aplica hoisting debido a que la función la asignamos a un objeto con const

const miFuncionFlecha = () => {
    console.log("Saludos desde miFuncionFlecha");
}

miFuncionFlecha();