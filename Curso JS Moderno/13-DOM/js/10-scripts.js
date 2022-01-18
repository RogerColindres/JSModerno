//Generar un HTML con JS
const enlace = document.createElement('A'); //creando un enlace
enlace.textContent = 'Nuevo Enlace'; //agregando contenido (texto) al nuevo elemento
enlace.href = '/nuevo-enlace';
const navegacion = document.querySelector('.navegacion');
//agregandoel nuevo enlace a navegacion, haciendo recorrido de DOM
//una forma de hacerlo
//navegacion.children[1].appendChild(enlace);
enlace.onclick = miFuncion;
//insertando nuevo enlace usando insertBefore
navegacion.insertBefore(enlace, navegacion.children[1]);
//console.log(enlace);

function miFuncion() {
    alert('Diste click')
}

//creando un nuevo card de forma dinamica
const parrafo1 = document.createElement('P');
const parrafo2 = document.createElement('P');
const parrafo3 = document.createElement('P');

parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titutlo');
parrafo3.textContent = '$1200 por persona';
parrafo3.classList.add('precio');

//creando el contenedor donde se encuentran los elementos de un card
const info = document.createElement('DIV');
//creando el contenedor para el card completo
const card = document.createElement('DIV');
//creando imagen para para el card
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

//agragando clases a contenedorCard y card
info.classList.add('info');
card.classList.add('card');

//agregando los parrafor a contenedorCard
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//agregando elementos al Card nuevo
card.appendChild(imagen);
card.appendChild(info);

//agregamos el elemento creado al conjunto de cards
const contenedorCards = document.querySelector('.hacer .contenedor-cards');
//insertandolo al HTML
contenedorCards.insertBefore(card, contenedorCards.children[0]);