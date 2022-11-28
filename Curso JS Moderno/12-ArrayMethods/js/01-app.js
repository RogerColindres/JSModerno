/***metodos para arreglos***/
/***Some***/
//comprueba si al menos un elemento del array cumple con la condicion de la funcion callback
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//recorremos y mostramos los elementos del arreglo
meses.forEach((mes) => {
    console.log(mes);
});

//includes revisa si un valor existe en un arreglo, retorna un boolean
const resultado = meses.includes("Abril");
console.log(resultado);

//Some para encontrar elementos en un arreglo de objetos
let existe = carrito.some((producto) => {
    return producto.nombre === "Celular"
})
console.log(existe)

//some en arreglo tradicional

existe = meses.some(function (mes) {
    return mes === 'Abril'
})

console.log(existe);