/***Mas metodos para string***/
const producto = "monitor de 20 pulgadas";
console.log(producto);

//replace reemplazar una cadena por otra
console.log(producto.replace("monitor", "Pantalla"));

//slice retorna una seccion de  la cadena
console.log(producto.slice(0, 7));//de donde inicia a donde termina
console.log(producto.slice(7));//inicia en ese valor y llega al final de la cadena

//substring retorna una segmento de una cadena
console.log(producto.substring(7, 0));