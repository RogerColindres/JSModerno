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

//metodo largo foreach 
let resultado = "";
let i = 0;
resultado = carrito.forEach(function (producto) {
    if (producto.precio <= 100) {
        i++;
    }
})
if (i == carrito.length) {
    resultado = true;
    i = 0;
} else {
    resultado = false;
    i = 0;
}
console.log(resultado);


//array method every()
const prueba = carrito.every((producto) => producto.precio <= 1000);
console.log(prueba);

const prueba2 = carrito.some((producto) => producto.precio <= 1000);
console.log(prueba2);