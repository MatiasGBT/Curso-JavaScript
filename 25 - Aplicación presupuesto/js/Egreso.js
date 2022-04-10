class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this.idEngreso = ++Egreso.contadorEgresos;
    }

    get getIdEngreso() {
        return this.idEngreso;
    }
}