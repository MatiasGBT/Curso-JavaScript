class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `idRaton: ${this._idRaton}, marca: ${this._marca}, tipo de entrada: ${this._tipoEntrada}`
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `idTeclado: ${this._idTeclado}, marca: ${this._marca}, tipo de entrada: ${this._tipoEntrada}`
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }

    set raton(raton) {
        this._raton = raton;
    }

    toString() {
        return `idComputadora: ${this._idComputadora}, nombre: ${this._nombre}, 
        monitor: ${this._monitor}, teclado: ${this._teclado}, raton: ${this._raton}`
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._productos.push(computadora);
    }

    mostrarOrden() {
        let productosOrden = "";
        for (let producto of this._productos) {
            productosOrden += "\n" + producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden}, Productos: ${productosOrden}`);
    }
}

let raton1 = new Raton("Entrada", "Genius");
let raton2 = new Raton("Entrada", "Redragon");
let teclado1 = new Teclado("Entrada", "Logitech");
let teclado2 = new Teclado("Entrada", "HyperX");
let monitor1 = new Monitor("Samsung", "24 pulgadas");
let monitor2 = new Monitor("LG", "23.5 pulgadas");
let computadora1 = new Computadora("PC oficina", monitor2, teclado1, raton1);
let computadora2 = new Computadora("PC gamer", monitor1, teclado2, raton2);
let computadora3 = new Computadora("PC ejemplo1", monitor1, teclado1, raton1);
let computadora4 = new Computadora("PC ejemplo2", monitor2, teclado2, raton2);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();

let orden3 = new Orden();
orden3.agregarComputadora(computadora1);
orden3.agregarComputadora(computadora2);
orden3.agregarComputadora(computadora3);
orden3.agregarComputadora(computadora4);
orden3.mostrarOrden();