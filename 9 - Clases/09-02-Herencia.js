class Persona {
    constructor(nombre, apellido) {
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre=nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido=apellido;
    }

    //Para crear metodos dentro de una clase no es necesaria la palabra function
    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //llamamos al constructor de la clase padre
        this._departamento=departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento=departamento;
    }
}

let persona = new Persona("Juan", "Gutierrez"); //Se pueden crear objetos de la clase padre
console.log(persona);
console.log(persona.nombreCompleto());

let empleado = new Empleado("María", "Gimenez", "Sistemas");
console.log(empleado);
console.log(empleado.nombreCompleto()); //Los metodos tmb se heredan