//La constante es la referencia al arreglo, el contenido se puede modificar
const ingresos = [
    new Ingreso("Salario", 2100),
    new Ingreso("Venta coche", 1500)
];

const egresos = [
    new Egreso("Renta departamento", 900),
    new Egreso("Ropa", 400)
];

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.getValor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.getValor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let ingresos = totalIngresos();
    let egresos = totalEgresos();
    let presupuesto = ingresos - egresos;
    let porcentajeEgreso = egresos/ingresos;
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(ingresos);
    document.getElementById("egresos").innerHTML = formatoMoneda(egresos);
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString("en-US",{style:"currency", currency:"USD", minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString("en-US",{style:"percent", minimumFractionDigits:2});
}

const cargarIngresos = ()=> {
    let ingresosHTML = "";
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=> {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.getValor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarIngreso(${ingreso.getIdIngreso})" ></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (id)=> {
    //Esto es como un foreach en el sentido que creamos una variable (ingreso) que guardara
    //la referencia del ingreso con id = al id que pasamos como parametro
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.getIdIngreso === id);
    ingresos.splice(indiceEliminar, 1); //Solo va a eliminar 1 elemento desde el indice encontrado
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = ()=> {
    let egresosHTML = "";
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=> {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.getDescripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.getValor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.getValor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarEgreso(${egreso.getIdEgreso})" ></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id)=> {
    let indiceEliminar = egresos.findIndex(egreso => egreso.getIdEgreso === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

const agregarDato = ()=> {
    let formulario = document.forms["formulario"];
    let tipo = formulario["tipo"];
    let descripcion = formulario["descripcion"];
    let valor = formulario["valor"];
    if (descripcion.value !== "" && valor.value !== "") {
        if (tipo.value === "ingreso") {
            //+valor.value es lo mismo que poner Number(valor.value),
            //lo que convierte al String en un tipo number
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        } else if (tipo.value === "egreso") {
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}