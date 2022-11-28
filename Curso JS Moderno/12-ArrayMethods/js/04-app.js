/***filter***/
//El método filter() crea un nuevo arreglo con todos los elementos que cumplen la condición dada en la funcion callback


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado = [];
carrito.forEach(function (producto, index) {
    if (producto.precio >= 400) {
        resultado.push(carrito[index])
    }
})
console.log(resultado);

//array method filter
const carrito2 = carrito.filter((producto) => producto.precio >= 400);

console.log(carrito2);

const compras = carrito.filter((producto) =>
    producto.nombre !== 'Audifonos'
);

console.log(compras);