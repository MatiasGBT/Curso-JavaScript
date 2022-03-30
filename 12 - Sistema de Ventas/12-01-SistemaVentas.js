class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre=nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio=precio;
    }

    toString() {
        //Esto se conoce como template literal o template strings
        //para este se tienen que usar las backslash `` (AltGr + corchete derecho y escribir una letra)
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden=++Orden.contadorOrdenes;
        this._productos=[];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if(this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal() {
        let totalVenta=0;
        for(let producto of this._productos) {
            totalVenta+=producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = "";
        for(let producto of this._productos) {
            productosOrden+="\n" + producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Remera", 100);
let producto3 = new Producto("Camisa", 300);
let producto4 = new Producto("Medias", 50);
let producto5 = new Producto("Gorra", 70);
let producto6 = new Producto("Buzo", 250);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);
orden2.mostrarOrden();