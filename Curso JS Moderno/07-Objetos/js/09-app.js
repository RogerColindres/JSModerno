"use strict"
/***Sellar un Objeto***/
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

//seal no se puede añadir ni eliminar propiedades, pero si modificar
Object.seal(producto);

producto.disponible = false;
console.log(producto);

//isSealed comprobar si el objeto esta sellado
console.log(Object.isSealed(producto));
