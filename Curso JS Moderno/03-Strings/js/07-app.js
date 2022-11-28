/***Mas metodos para string***/
const producto = "Monitor de 20 pulgadas"

//toLowercase
console.log(producto.toLowerCase());
console.log(producto.substring(0, 7).toLowerCase());

//upercase
console.log(producto.toUpperCase());
console.log(producto.substring(0, 7).toUpperCase().concat(producto.slice(7)));

//toString para cambiar un numero a String
const precio = 300;
console.log(precio.toString());
