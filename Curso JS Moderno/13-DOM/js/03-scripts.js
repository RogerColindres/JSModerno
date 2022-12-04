//Seleccionar elementos por ID
//los ID son unicos por cada elemento, en todo el html y en cada documento
const formulario = document.getElementById('formulario');
console.log(formulario);

//si el id no existe retorna null
const noExiste = document.getElementById('no-existe')
console.log(noExiste);

//Si existen dos o mas id iguales getElementById retorna el primero que encuentra

