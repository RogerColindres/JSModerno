//eventos con el mouse
const nav = document.querySelector('.navegacion');

//resgistrando un evento 
//click
//mouseenter entrado a la navegacion 
//mouseout saliendo de la navegacion
//mousedown similar a un click
//mouseup click sostenido y se cumple hasta que se suelta el click 
//dblclick doble click
nav.addEventListener('mouseenter', function() {
    console.log('entrando a la navegacion')
    nav.style.backgroundColor = 'white';
});
nav.addEventListener('mouseout', function() {
    console.log('saliendo a la navegacion')
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', function() {
    console.log('click a la navegacion')
});

nav.addEventListener('mouseup', function() {
    console.log('click a la navegacion sostenido')
});
nav.addEventListener('dblclick', function() {
    console.log('doble click a la navegacion')
});