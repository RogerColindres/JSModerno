"use strict"
/***funciones que retornan valores***/
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 5);
console.log(resultado);

//ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

agregarCarrito(300)
agregarCarrito(100)
agregarCarrito(600)

const totalPagar = calcularImpuesto(total);

console.log(total)
console.log(totalPagar)

