/***addEventListener()***/
//el metodo adjunta un controlador de eventos a un elemento.
//recive dos argumentos el evento (obligatorio) y una funcion (obligatorio) que se ejecuta cuando ocurre el evento

//detectar cuando el html esta listo
console.log(1);

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento Listo');
    console.log(2);
});
console.log(3)