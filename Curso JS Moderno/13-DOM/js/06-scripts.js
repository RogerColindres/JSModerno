//Modificar Texto e Imagenes con JS
const encabezado = document.querySelector('.contenido-hero h1'); //seleccionamos el elemento a modificar
console.log(encabezado);

//console.log(encabezado.innerText); //si existe en css la propiedad visibility hidden no lo encuentra
//console.log(encabezado.textContent); //si lo encentra 
//console.log(encabezado.innerHTML); //trae el html tambien

//encademanmiento
const encabezado2 = document.querySelector('.contenido-hero h1').textContent; //obtiene el contenido del elemento seleccionado
console.log(encabezado2);

//modificando el exto con textcontent
//document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

//seleccionando una imagen y modificandola
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';