//metodos para arreglos
//Some 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes) => {
    console.log(mes);
});

const resultado = meses.includes('Enero');

//console.log(resultado);

//Some se utiliza en arreglos de objetos:segun juan de la torre
//Some recibe una funcion y se puede usar con cualquier tipo de arreglo
const existe = carrito.some((producto) => {
    return producto.nombre === 'Celular';
});

//console.log(existe);

//arreglo tradicional con .some
const existe2 = meses.some(mes => {
    return mes === 'Enero';
})

//console.log(existe2);

const enero = function(mes) {
    return mes === 'Enero';
};

console.log(meses.some(enero));