//Los métodos comunes se asocian con los objetos, los métodos estáticos se asocian con la clase

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

    toString() {
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Saludos desde método estático");
    }

    //A un método estático si se le pueden pasar como argumentos un objeto
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
console.log(persona.toString());

let empleado = new Empleado("María", "Gimenez", "Sistemas");
console.log(empleado.toString());

//persona.saludar(); no es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona);

//Los métodos estáticos se heredan
Empleado.saludar();
Empleado.saludar2(empleado);