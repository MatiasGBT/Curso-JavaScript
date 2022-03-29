class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona=++Persona.contadorPersonas;
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }

    get idPersona() {
        return this._idPersona;
    }

    set idPersona(idPersona) {
        this._idPersona=idPersona;
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

    get edad() {
        return this._idPersona;
    }

    set edad(edad) {
        this._edad=edad;
    }

    toString() {
        return "Id: " + this._idPersona + ", nombre: " + this._nombre + ", apellido: " + this._apellido
        + ", edad: " + this._edad;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = Persona.contadorPersonas;
        this._sueldo=sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    set idEmpleado(idEmpleado) {
        this._idEmpleado=idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo=sueldo;
    }

    toString() {
        return super.toString() + ", sueldo: " + this._sueldo;
    }
}

class Cliente extends Persona {
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = Persona.contadorPersonas;
        this._fechaRegistro=fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    set idCliente(idCliente) {
        this.idCliente=idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro=fechaRegistro;
    }

    toString() {
        return super.toString() + ", fecha de registro: " + this._fechaRegistro;
    }
}

let persona = new Persona("Pepe", "Argento", 28);
console.log(persona.toString());

let empleado = new Empleado("Jose", "Ramirez", 32, 10000);
console.log(empleado.toString());

let cliente = new Cliente("Carla", "Quintero", 23, new Date());
console.log(cliente.toString());