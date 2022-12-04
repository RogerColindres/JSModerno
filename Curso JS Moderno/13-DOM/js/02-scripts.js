//getElementByClassName
//seleccionar elementos por su clase
//las clases se colocan como estan definidas en el html
const elemento = document.getElementsByClassName('header');

const hero = document.getElementsByClassName('hero');
//si las clases se repiten mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');

//si la clase no existe se devuelve o retorna un elemento vacio
const noExiste = document.getElementsByClassName('no-existe');

console.log(elemento);
console.log(hero);
console.log(contenedores);
console.log(noExiste);