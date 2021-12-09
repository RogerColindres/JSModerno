//Mayor o igual y else if
const dinero = 1000;
const totalPagar = 500;
const tarjeta = true;

if (dinero >= totalPagar) {
    console.log("Si podemos pagar")
} else if (tarjeta) {
    console.log('Si puedo pagar porque tengo tarjeta')
} else {
    console.log('Fondos Insuficientes')
}