//Evento submit en un formulario
const formulario = document.querySelector('#formulario')

//El evento submit ocurre cuando se envía un formulario. 
formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault();
    console.log(e.target.action)
}