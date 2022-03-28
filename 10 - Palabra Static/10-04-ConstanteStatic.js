class Persona {
    //Esta variable estática se puede modificar, lo que buscamos ahora es una variable
    //estática constante (o de solo lectura) que no pueda cambiar su valor
    static contadorPersonas = 0;

    //Como no se puede usar la palabra const, vamos a crear un método que solo nos permite
    //leer lo que devuelve, y no modificar su valor
    static get MAX_OBJ() {
        return 5;
    }
    //Esta "constante" indicar cuandos objetos podemos crear de la clase Persona

    constructor(nombre, apellido) {
        if (Persona.contadorPersonas<Persona.MAX_OBJ) {
            this._nombre=nombre;
            this._apellido=apellido;
            this.idPersona=++Persona.contadorPersonas;
        } else {
            console.log("Ya no se pueden crear más objetos de esta clase");
        }
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
        return this.idPersona + " " + this._nombre + " " + this._apellido;
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

let persona1 = new Persona("Juan", "Gutierrez");
let empleado1 = new Empleado("María", "Gimenez", "Sistemas");

console.log(Persona.MAX_OBJ); //Como es un get no hay que poner parentesis ()
Persona.MAX_OBJ=10;
console.log(Persona.MAX_OBJ); //No se modifica el valor porque no hay método set

let persona2 = new Persona("Mariano", "Lara");
let persona3 = new Persona("Armando", "Toledo");
let persona4 = new Persona("José", "Quintero");
let persona5 = new Persona("Pepe", "Argento");

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
console.log(persona4.toString());
console.log(persona5.toString());