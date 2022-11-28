/***break y continue***/
//for loop

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("CINCO");
        continue;
    }
    console.log("Numero: " + i.toString());
}

const carrito = [
    { nombre: 'monitor', precio: 100 },
    { nombre: 'pantalla', precio: 200 },
    { nombre: 'Celular', precio: 300, descuento: true },
    { nombre: 'Mouse', precio: 400 },
    { nombre: 'Audifono', precio: 500 },

];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}