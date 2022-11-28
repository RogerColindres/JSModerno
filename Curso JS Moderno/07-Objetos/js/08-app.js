"use strict"//es.reactjs.org/tutorial/tutorial.html//modo estricto javascript
//Metodos para obejtos, object methods
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

producto.disponible = false;
console.log(producto);

//freeze, congelar un obejto para evitar crear modificar o eliminar las propiedades del mismo 
Object.freeze(producto);

//isFrozen saber si el metodo esta congelado para modificar, crear o eliminar
console.log(Object.isFrozen(producto));

producto.disponible = true;



