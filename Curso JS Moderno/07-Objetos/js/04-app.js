/***Destructuring de objetos***/
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

const nomProducto = producto.nombre;
console.log(nomProducto);

const { nombre, precio, disponible } = producto;
console.log(nombre);