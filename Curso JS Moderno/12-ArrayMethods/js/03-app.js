/***reduce***/
//funcion reductora sobre cada elemento de un arreglo devolviendo como resultado un unico valor
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
let total = 0;

carrito.forEach(producto => {
    total += producto.precio;
});

console.log(total);

// con reduce
const numeros = [1, 2, 3, 4, 5];

total = numeros.reduce(function (acc, elemento) {
    return acc += elemento;
}, 0)

console.log(total);

total = carrito.reduce(function (acc, producto) {
    return acc += producto.precio
}, 0)

console.log(total)