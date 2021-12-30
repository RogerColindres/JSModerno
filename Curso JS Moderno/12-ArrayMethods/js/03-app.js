//reduce 
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

const res = numeros.reduce((acc, item) => {
    return acc = acc + item;
}, 0)
console.log(res);

const res2 = carrito.reduce((total, producto) => {
    return total = total + producto.precio;
}, 0);

console.log(res2);