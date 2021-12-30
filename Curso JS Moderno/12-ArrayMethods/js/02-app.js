//findindex 
//encontrar la posicion de un elemento de un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach(function(mes, i) {
    console.log(i + " " + mes);
})

const enero = function(mes) {
    return mes === "Enero";
}

console.log(meses.findIndex(enero));

const buscaProducto = carrito.findIndex(producto => {
    return producto.nombre === 'Audifonos';
});
console.log(buscaProducto);