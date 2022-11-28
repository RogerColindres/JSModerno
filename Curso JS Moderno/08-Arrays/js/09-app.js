/***ForEach***/
const carrito = [
    { nombre: "monitor", precio: 300 },
    { nombre: "celular", precio: 300 },
    { nombre: "teclado", precio: 300 },
    { nombre: "mouse", precio: 300 }
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} Precio: ${carrito[i].precio}`)

}

carrito.forEach((producto) => {
    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`)
});