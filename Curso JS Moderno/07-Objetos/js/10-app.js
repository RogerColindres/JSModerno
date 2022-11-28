/***Unir dos Objetos***/
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1k",
    medida: "20 pulgadas"
}

//Object.assing para unir dos objetos
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//spread operator o rest operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);