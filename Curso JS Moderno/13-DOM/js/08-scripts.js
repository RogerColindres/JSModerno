//recorriendo el DOM o Traversing DOM
const navegacion = document.querySelector('.navegacion');
console.log(navegacion)
console.log(navegacion.childNodes); //los espacios en blanco o saltos de linea en HTML son considerados elementos
console.log(navegacion.children);//muestra los elementos html
console.log(navegacion.children[0])
console.log(navegacion.children[0].nodeName); //nombre del elemento html
console.log(navegacion.children[0].nodeType); //tipo de elemento en este caso elemento html
console.log(navegacion.firstElementChild); //primer elemento
console.log(navegacion.lastElementChild); //ultimo elemento


//seleccionar un card
const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo Heading con Traversing DOM';
card.children[0].src = 'img/hacer2.jpg';
console.log(card.children[0]);



//recorriendo de hijo a padre
console.log(card.parentNode); //toma en cuenta espacios en blanco en html
console.log(card.parentElement); //toma unicamente los elementos sin espacios en blancpo

//children para recorrer de padre a hijo
//parentElment de hijo a padre

//recorrido entre hermanos, elementos al mismo nivel
//adelante para atras
console.log(card);
console.log(card.nextElementSibling);

//de atras hacia adelante
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);