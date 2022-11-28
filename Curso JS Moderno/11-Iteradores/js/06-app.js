//forEach y MAP
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

//foreach se utiliza para recorer el arreglo
pendientes.forEach((pendiente) => {
    console.log(pendiente);
})

//map recorre un arreglo y crea uno nuevo
const masTareas = pendientes.map((tarea) => {
    return tarea;
})
console.log(masTareas);
//MAP funciona similar a forEach a difrenecia que este crea nuevos arreglos