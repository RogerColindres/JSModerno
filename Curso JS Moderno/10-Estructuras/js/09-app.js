//OPerador Tenario
const autenticado = true;
const puedePagar = true;

console.log(autenticado && puedePagar ? 'Si esta autenticado' : 'no esta autenticado');
console.log(autenticado || puedePagar ? 'Si esta autenticado' : 'no esta autenticado');

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalpagar = 600;

if (efectivo > totalpagar || credito > totalpagar || disponible > totalpagar) {
    if (efectivo > totalpagar) {
        console.log('Pagaste con efectivo')
    } else {
        console.log('Otra forma de pago')
    }
} else {
    console.log('Fondos insuficientes')
}

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, NO puede pagar' : 'No esta autenticado');