/***ForIN***/
//for in itera sobre objetos de un arreglo (llaves, indices)
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

for (let pendiente in pendientes) {
    console.log(pendiente);//devuelve los indices del arreglo
}

const automovil = {
    modelo: 'Camaro',
    anio: '1969',
    motor: ' 6.0'
}

for (let propiedad in automovil) {
    console.log(propiedad + ": " + automovil[propiedad]);
}

//otra forma de iterar un obejto
for (let [llave, valor] of Object.entries(automovil)) {
    console.log(`${llave}: ${valor}`)
}