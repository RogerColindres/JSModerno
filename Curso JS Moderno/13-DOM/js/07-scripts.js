//cambiando CSS con JS
const encabezado = document.querySelector('h1');
console.log(encabezado.style);
/*las propiedades de CSS que se conforman por dos palabras
eje.: justify-Content, en JS se escriben de la siguiente manera
justifyContent, se elemina el guion (o cualquier espacio o caracter
y se inicia la segunda palabra en mayuscula)*/
//ejemeplos
//encabezado.style.backgroundColor = 'red';
//encabezado.style.fontFamily = 'Arial';
//encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
console.log(card)
//card.classList.add('nueva-clase', 'segunda-clase');
//card.classList.remove('segunda-clase');
console.log(card.classList);