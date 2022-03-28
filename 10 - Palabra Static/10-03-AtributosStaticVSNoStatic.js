class Persona {

    static contadorObjetosPersona = 0; //Atributo de nuestra clase

    //Se pueden agregar atributos no estáticos sin definirlos en el constructor
    email = "Valor default del email"; //Atributo de nuestros objetos

    constructor(nombre, apellido) {
        this._nombre=nombre;
        this._apellido=apellido;
        Persona.contadorObjetosPersona++;
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

    toString() {
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Saludos desde método estático");
    }

    static saludar2(persona) {
        console.log("Hola " + persona._nombre + " " + persona._apellido);
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
let empleado = new Empleado("María", "Gimenez", "Sistemas");

console.log(persona.email);
console.log(empleado.email);