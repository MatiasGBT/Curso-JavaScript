const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Carla", "Lara")
];

function mostrarPersonas() {
    let texto = "";
    for (persona of personas) {
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
    const formulario = document.forms["formulario"];
    const nombre = formulario["nombre"];
    const apellido = formulario["apellido"];
    if (nombre.value != "" && apellido.value != "") {
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    } else {
        console.log("No hay información que agregar");
    }
}