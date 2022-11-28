/***Agregar y eliminar propiedades a un objeto***/
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

//agregando nuevas propiedades a un objeto
producto.imagen = "imagen.jpg";

//Elimanar propiedad de un objeto
delete producto.disponible;

console.log(producto);
