//querySelector
//retorna maximo un elemento, el primero que encuentra
//permite usar sintaxis similares a css a l momento de seleccionar un 
//elemento
const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especificos como en css

const info = document.querySelector('.contenedor-cards .info'); //o premium
console.log(info);

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//querySelector con ID's
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos html
const nav = document.querySelector('nav');
console.log(nav);