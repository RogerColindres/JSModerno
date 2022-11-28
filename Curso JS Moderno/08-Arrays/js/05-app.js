/***Metodos para agregar elementos a un arreglo***/
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

//push agregar elementos al final de un arreglo
meses.push("junio");

//unshift agregar elelentos al inicio de un arreglo
meses.unshift("junio");

console.table(meses);

const carrito = [];
const producto = {
    nombre: "monitor",
    precio: 300
}

carrito.push(producto);

console.table(carrito);