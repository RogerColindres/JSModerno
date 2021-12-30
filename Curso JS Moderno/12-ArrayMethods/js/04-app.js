//filter
//El método filter()crea un nuevo array con todos los elementos que cumplen la condición implementada por la función dada.


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const carrito2 = carrito.filter((producto) => producto.precio >= 400);

console.log(carrito2);

const compras = carrito.filter((producto) =>
    producto.nombre !== 'Audifonos'
);

console.log(compras);