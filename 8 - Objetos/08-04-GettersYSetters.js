let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    idioma: "es",

    //Con los metodos get y set ya no hace falta usar la palabra function
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },

    get lang() {
        return this.idioma.toUpperCase();
    },

    set lang(lang) {
        this.idioma=lang.toUpperCase();
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

//De manera indirecta manda a llamar al método set
persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);