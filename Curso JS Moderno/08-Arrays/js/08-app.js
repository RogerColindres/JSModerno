/***Destructuring en arreglos***/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']

const [, segundo, ...tercero] = meses;
console.log(segundo);
console.log(tercero);