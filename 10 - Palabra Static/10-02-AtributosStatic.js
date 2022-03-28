class Persona {

    //Este atributo pertenece a la clase y no a los objetos
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido) {
        this._nombre=nombre;
        this._apellido=apellido;
        //this se asocia con el objeto que se esta creando, por ende, no tenemos
        //que utilizarlo para incrementar el contador estático. 
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

console.log(persona.contadorObjetosPersona); //Sale undefined
console.log(Persona.contadorObjetosPersona); //Funciona
console.log(Empleado.contadorObjetosPersona); //Funciona