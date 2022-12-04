// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//cuando la funcion asociada al evento no recibe parametros lo podes hacer de la siguiente manera
// parrafo3.onclick = nuevaFuncion;

//pero cuendo la funcion que llamamos por un evento recibe parametros tenemos que hacer el llamado de la funcion desde una funcion anonima para evitar que se auto ejecute, ejemplo

parrafo3.onclick = function () {
    //desde aqui hacemos el llamdo de la funcion con parametros
    nuevaFuncion(1)
}

//lo anterior es ideal para cuando creamos contenido HTML y queremos ir agradegandole funciones asociadas a un evento


// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info


function nuevaFuncion(a) {
    console.log('Desde nueva funcion', a)
}