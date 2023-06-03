//Modificar Texto e Imagenes con JS
const encabezado = document.querySelector('.contenido-hero h1'); //seleccionamos el elemento a modificar
console.log(encabezado);

// console.log(encabezado.innerText); //si existe en css la propiedad visibility hidden no retorna el texto del elemento html
// console.log(encabezado.textContent); //retorna el texto del elemento html
// console.log(encabezado.innerHTML); //trae el html completo sus etiqutas y el contenido entre ellas

//encademanmiento
const encabezado2 = document.querySelector('.contenido-hero h1').textContent; //obtiene el contenido del elemento seleccionado
//console.log(encabezado2);


//modificando el texto con textcontent
//document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

//seleccionando una imagen y modificandola
const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';