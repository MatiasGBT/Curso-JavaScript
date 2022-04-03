//Ejemplo promesas, await, async y setTimeout
async function miFuncion() {
    let promesa = new Promise(RESOLVED => {
        setTimeout(()=>RESOLVED("Promesa con await y timeout"), 3000);
    });
    console.log(await promesa);
}

miFuncion();