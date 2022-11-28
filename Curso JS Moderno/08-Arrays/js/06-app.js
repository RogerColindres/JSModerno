/***crear arreglos con spread o rest operator***/
//las funciones imperativa modifica el elemento original
//funciones declarativas no modifica el objeto original
const carrito = [];

const producto = {
    nombre: "monitor",
    precio: 300
}

const producto1 = {
    nombre: "celular",
    precio: 300
}

const producto2 = {
    nombre: "teclado",
    precio: 300
}

let resultado = [...carrito, producto];
resultado = [...resultado, producto1];

console.table(resultado);