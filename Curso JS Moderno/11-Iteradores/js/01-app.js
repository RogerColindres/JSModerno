/***For Loop***/
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es par`)
    } else {
        console.log(`${i} es impar`)
    }
}

const carrito = [
    { nombre: 'monitor', precio: 100 },
    { nombre: 'pantalla', precio: 200 },
    { nombre: 'Celular', precio: 300 },
    { nombre: 'Mouse', precio: 400 },
    { nombre: 'Audifono', precio: 500 },

];

for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`)
}