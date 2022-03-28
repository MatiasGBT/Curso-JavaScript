//Cuando no definimos ningun padre a una clase, JS automaticamente lo extiende de la clase Object
//Esta clase tiene varios metodos, entre estos toString.
//class Persona extends Object {
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

    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }

    //Se sobreescribe el metodo de la clase padre (Object)
    toString() {
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento=departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento=departamento;
    }

    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona = new Persona("Juan", "Gutierrez");
console.log(persona.toString());

let empleado = new Empleado("María", "Gimenez", "Sistemas");
console.log(empleado.toString());