//eventos con el mouse
const nav = document.querySelector('.navegacion');



//El evento ocurre cuando el usuario hace clic en un elemento
// nav.addEventListener('click', () => {
//     console.log('click en la navegacion')
// })

//El evento ocurre cuando el puntero se mueve sobre un elemento.
// nav.addEventListener('mouseenter', function () {
//     console.log('entrando a la navegacion')
//     nav.style.backgroundColor = 'white';
// });

//El evento ocurre cuando un usuario mueve el puntero del mouse fuera de un elemento o fuera de uno de sus elementos secundarios.
// nav.addEventListener('mouseout', function () {
//     console.log('saliendo a la navegacion')
//     nav.style.backgroundColor = 'transparent';
// });

//El evento ocurre cuando el usuario presiona un botón del mouse sobre un elemento
// nav.addEventListener('mousedown', function () {
//     console.log('click a la navegacion')
// });

//El evento ocurre cuando un usuario suelta un botón del mouse sobre un elemento
// nav.addEventListener('mouseup', function () {
//     console.log('click a la navegacion sostenido')
// });

//El evento ocurre cuando el usuario hace doble clic en un elemento
nav.addEventListener('dblclick', function (e) {
    console.log('doble click a la navegacion')
});