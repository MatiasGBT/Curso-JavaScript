//Cuando trabajamos con clases no se aplica Hoisting, es decir, primero hay que definir
//la clase para poderla utilizar, no como con las funciones.

class Persona {
    constructor(nombre, apellido) {
        //Cuando definimos un atributo con this en el constructor, JavaScript
        //lo crea automáticamente como atributo/propiedad de la clase, no hace
        //falta declararlo
        this._nombre=nombre;
        this._apellido=apellido;
        //Se tiene que poner _ para que funcionen los getter y setters, ya que los metodos
        //get y set se llamaran nombre y apellido, y no se pueden llamar igual el atributo de
        //nuestra clase con los metodos de esta
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
}

let persona1 = new Persona("Juan", "Gutierrez");
console.log(persona1);
console.log(persona1.nombre); //Indirectamente llama al metodo get
persona1._nombre="Juan Carlos"; //Indirectamente llama al metodo set
console.log(persona1.nombre);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);