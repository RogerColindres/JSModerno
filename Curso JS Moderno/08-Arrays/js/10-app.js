/***Map y su difrencia con foreach***/
const carrito = [
    { nombre: "monitor", precio: 300 },
    { nombre: "celular", precio: 300 },
    { nombre: "teclado", precio: 300 },
    { nombre: "mouse", precio: 300 }
]

//Son similares en sintaxis
//Map crea un nuevo arreglo que lo rellana con el recorrido que realiza
//foreach solo sirve para recorrer un arreglo

carrito.forEach((producto) => {
    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`)
});

const carrito2 = carrito.map((producto) => {
    return `Producto: ${producto.nombre} Precio: ${producto.precio}`
})

console.table(carrito2);