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

let empleado = new Empleado("Pepe", 2500);
console.log(empleado.obtenerDetalles());
let gerente = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente.obtenerDetalles());