//otro de ejercicio de HTML con jS
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarFooter);

//que pasa en la funcion
//1. inicialmente el elemento html no tiene la clase 'activo'
//por lo tanto al darle click agragamos esa clase y se muestra en pantalla
//2. cuando volvemos a dar click y el footer se esta visualizando
//en ese momento la clase existe, por lo tanto al dar click elimina la clase
function mostrarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';

    }



}

console.log(footer.classList);