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

    //La clase hija modificara el comportamiento del metodo nombreCompleto
    //de la clase padre para que incluya el departamento (sobreescritura).
    nombreCompleto() { //Tiene que tener el mismo nombre y parametros que el de la clase padre
        return super.nombreCompleto() + ", " + this._departamento;
        //con super ya no hay que reescribir el código de la clase padre
    }
}

let persona = new Persona("Juan", "Gutierrez");
console.log(persona.nombreCompleto());

let empleado = new Empleado("María", "Gimenez", "Sistemas");
console.log(empleado.nombreCompleto());