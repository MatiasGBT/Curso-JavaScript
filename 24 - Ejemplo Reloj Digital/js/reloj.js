const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let segs = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${segs}`

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    document.getElementById("fecha").innerHTML = `${diaSemana}, ${dia} ${mes}`
}

const formatoHora = (hora)=> {
    if (hora < 10) {
        hora = "0" + hora;
    }
    return hora;
}

//Este script se llama automáticamente al cargar la página
setInterval(mostrarReloj, 1000);