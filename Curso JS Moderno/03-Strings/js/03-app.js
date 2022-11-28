/***Concatenacion y template strings***/
const producto = "Monitor";
const precio = 300

//concatenacion
console.log(producto.concat(precio))
console.log("Producto: " + producto + " " + "Precio: " + precio);

//Template String
console.log(`Producto: ${producto} Precio: ${precio}`);