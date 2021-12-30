//forOF
//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterablezz
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Television', precio: 600 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Celular', precio: 700 },
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}