//Generar un HTML con JS
//creando un enlaces, sus propiedades e insertadolo desde JS a HTML
const enlace = document.createElement('A'); //creando un enlace <a></a>
enlace.textContent = 'Nuevo Enlace' //Agregando texto
enlace.href = 'https://google.com'// agraegando direccion al nuevo enlace
enlace.target = '_blanck'
enlace.classList.add('nueva-clase')//agregando nueva clase
//agregando una funcion de evento al nuevo enlace
enlace.onclick = mifuncion;

function mifuncion() {
    alert('Diste Click')
}

//seleccionando donde agregaremos el enlace
const navegacion = document.querySelector('.navegacion');
//agregando el nuevo enlace a navegacion
//.appendChild
navegacion.appendChild(enlace)
//.insertBefore
//navegacion.insertBefore(enlace, navegacion.children[0])


// console.log(enlace);
// console.log(navegacion.children);

//Creando un Card (tarjeta), sus propiedades e insertandolo desde JS a HTML
//creando los parrafos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'concierto de AC/DC';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$2000 por persona'
parrafo3.classList.add('precio')

//creando div (info) para contener parrafos
const info = document.createElement('DIV');
info.classList.add('info');

//creando imagen
const imagen = document.createElement('IMG')
imagen.src = 'img/hacer2.jpg'
imagen.alt = 'cconcierto de Rock'


//agregando los tres parrafos a info
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//creando el div (card) para contener todos los elementos
//info e imagen que componen el card
const card = document.createElement('DIV');
card.classList.add('card');
//Agregando los elementos a card
card.appendChild(imagen);//imagen
card.appendChild(info);//info

//seleccionando el contenedor para insertar el card creado, JS a HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
//appendChild
//contenedor.appendChild(card);
//.insertBefore
contenedor.insertBefore(card, contenedor.children[0])


// console.log(parrafo1)
// console.log(parrafo2)
// console.log(parrafo3)
// console.log(info.children)
// console.log(imagen)
// console.log(card)
// console.log(card.children[1].children)
console.log(contenedor);