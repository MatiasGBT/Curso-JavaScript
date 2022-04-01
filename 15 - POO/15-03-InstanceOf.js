class Empleado {
    constructor(nombre, sueldo) {
        this.nombre=nombre;
        this.sueldo=sueldo;
    }

    obtenerDetalles() {
        return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento=departamento;
    }

    //Sobreescribimos el metodo obtenerDetalles()
    obtenerDetalles() {
        return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}, departamento: ${this.departamento}`
    }
}

function determinarTipo(tipo) {
    //Para saber que clase estamos utilizando, se puede usar instanceof,
    //sin embargo, la clase hija también devolvera que es de tipo Empleado
    /*if (tipo instanceof Empleado) {
        console.log("Es un objeto de tipo Empleado");
    }*/

    //Aunque no responde a tipos hijo, es decir, si preguntamos directamente
    //por la clase hija no va a saltar la clase padre
    /*if (tipo instanceof Gerente) {
        console.log("Es un objeto de tipo Gerente")
    }*/

    //Para resolver esto solo hay que usar else if
    if (tipo instanceof Gerente) {
        console.log("Es un objeto de tipo Gerente");
        //Podemos usar los atributos que sabemos que estan definidos
        console.log(tipo.departamento);
    } else if (tipo instanceof Empleado) {
        console.log("Es un objeto de tipo Empleado");
        //Como no esta definido sale undefined
        console.log(tipo.departamento);
    }
    //Ahora ya no ejecuta varias veces
}

let empleado = new Empleado("Pepe", 2500);
let gerente = new Gerente("Carlos", 5000, "Sistemas");
determinarTipo(empleado);
determinarTipo(gerente);