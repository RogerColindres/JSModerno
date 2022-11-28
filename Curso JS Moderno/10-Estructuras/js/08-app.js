//detener la ejecucion de un if
//incluir los if else en funciones, para detner el codigo
const autenticado = true;
if (autenticado) {
    console.log('El usuario esta autenticado');
}


function revisarPuntaje(puntaje) {
    if (puntaje > 400) {
        console.log('Excelente')
        return;
    } else if (puntaje > 300) {
        console.log('Buen puntaje')
        return;
    }
}

const puntaje = 450;

revisarPuntaje(puntaje);