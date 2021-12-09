//funcion flecha en foreach y map
const carrito = [
    { nombre: 'monitor', precio: 100 },
    { nombre: 'pantalla', precio: 200 },
    { nombre: 'Celular', precio: 300 },
    { nombre: 'Mouse', precio: 400 },
    { nombre: 'Audifono', precio: 500 },

];

const nuevoArreglo = carrito.map(producto => {
    return `${producto.nombre} - precio: ${producto.precio}`
})

carrito.forEach(producto => {
    console.log(`${producto.nombre} - precio: ${producto.precio}`)
})

console.log(nuevoArreglo);