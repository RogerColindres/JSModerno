//eventos que suceden con el teclado
//eventos sobre los inputs


const busqueda = document.querySelector('.busqueda');
const titulo = document.querySelector('.contenido-hero h1')

//keydown ejecuta un evento cuando se presiona una tecla
// busqueda.addEventListener('keydown', function (e) {
//     console.log(e)
// })

//El evento ocurre cuando el usuario está presionando una tecla
// busqueda.addEventListener('keydown', function () {
//     console.log('Escribiendo... constantemente....')
// })

//El evento ocurre cuando el usuario suelta una tecla que estaba presionando
// busqueda.addEventListener('keyup', function () {
//     console.log('Escribiendo... constantemente....')
// })

//blur se ejecuta al momento de salir del input
// busqueda.addEventListener('blur', function () {
//     console.log('sobre el inpup')
// })

//copy cuando se copia texto haciendo uso del teclado (windows ctrl + c)
// busqueda.addEventListener('copy', function () {
//     console.log('copiando....')
// })
// titulo.addEventListener('copy', function () {
//     console.log('copiando....')
// })

//paste se ejecuta cuando pegas algo sobre el input o en cualquier lugar que se pueda pegar texto
// busqueda.addEventListener('paste', function () {
//     console.log('pegando....')
// })


//cut cuando se corta texto de un input
// busqueda.addEventListener('cut', function () {
//     console.log('cortando....')
// })

//input se ejecuta por cualquier elemento que involucre el teclado
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
})