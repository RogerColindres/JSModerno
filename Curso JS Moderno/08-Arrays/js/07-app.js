/***Eliminar elementos de un arreglo***/
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
const producto4 = {
    nombre: "mouse",
    precio: 300
}


carrito.push(producto);
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto4);

//pop eliminar el ultimo elementos de un arreglo
// carrito.pop();

//shift eliminar al inicio del arreglo
// carrito.shift();

//splice elimina elementos en cualquier parte del arreglo
//Tambien puede sustituir elementos de un arreglo
//para eliminar
carrito.splice(1, 1);
//para agregar o sustituir
carrito.splice(3, 0, producto);

console.table(carrito);