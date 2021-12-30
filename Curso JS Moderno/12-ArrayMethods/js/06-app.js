//every
//Determina si todos los elementos en el array satisfacen una condición.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const prueba = carrito.every((producto) => producto.precio <= 1000);
console.log(prueba);

const prueba2 = carrito.some((producto) => producto.precio <= 1000);
console.log(prueba2);