/***Recorrer un arreglo***/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

console.table(meses);

//length para saber el tamaño de un arreglo
console.log(meses.length);

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i])
}