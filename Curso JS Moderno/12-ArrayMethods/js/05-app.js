/***find***/
//El método find()devuelve el valor del primer elemento del array que cumple la condicion de la funcion callback
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//con un foreach
let resultado = "";
carrito.forEach(function (producto, index) {
    if (producto.nombre === 'Teclado') {
        resultado = carrito[index]
    }
})

console.log(resultado);

//array method find
const busqueda = carrito.find(producto => producto.nombre === 'Teclado');
console.log(busqueda);

const busqueda2 = carrito.find(function (producto) {
    return producto.precio >= 700
})
console.log(busqueda2);