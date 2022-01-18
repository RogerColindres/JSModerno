//eleminar elementos en el DOM
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

//eliminado elemento por si mismo
//primerEnlace.remove();

//eliminado elementos desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);