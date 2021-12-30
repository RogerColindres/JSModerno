//ForIN
//for in itera sobre objetos de un arreglo (llaves, indices)
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

for (let pendiente in pendientes) {
    console.log(pendiente);
}

const automovil = {
    modelo: 'Camaro',
    anio: '1969',
    motor: ' 6.0'
}

for (let propiedad in automovil) {
    console.log(automovil[propiedad]);
}