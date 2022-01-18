//eventos que suceden en el teclado
//eventos sobre los inputs
//keydown ejecuta un evento cuando se presiona una tecla
const busqueda = document.querySelector('.busqueda');
// busqueda.addEventListener('keydown', function() {
//         console.log('Escribiendo...')
//     })
//     //keyup se ejecuta cuando presionas y se suelta una tecla
// busqueda.addEventListener('keydown', function() {
//         console.log('Escribiendo... constantemente....')
//     })
//     //blur se ejecuta al momento de salir del input
// busqueda.addEventListener('blur', function() {
//         console.log('sobre el inpup')
//     })
//     //copy cuando se copia el texto de un input
// busqueda.addEventListener('copy', function() {
//         console.log('copiando....')
//     })
//     //paste se ejecuta cuando pegas algo sobre el input
// busqueda.addEventListener('paste', function() {
//         console.log('pegando....')
//     })
//     //cut cuando se corta texto de un input
// busqueda.addEventListener('cut', function() {
//     console.log('cortando....')
// })

//input se ejecuta por cualquier elemento que involucre el teclado
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
})