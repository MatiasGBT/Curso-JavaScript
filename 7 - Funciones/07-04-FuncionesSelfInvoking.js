//Las funciones de tipo Self Invoking se manda a llamar a ellas mismas
(function (){
    console.log("Ejecutando la función");
})();
//Para que se mande a llamar automáticamente hay que escribir () al final
//Este tipo de función no se puede reutilizar

//Pasando valores
(function (a, b){
    console.log(a+b);
})(3, 4);