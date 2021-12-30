//concatenar arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

const meses3 = meses.concat(meses2);
console.log(meses3);

//spread operator

const meses4 = [...meses, ...meses2];
console.log(meses4);