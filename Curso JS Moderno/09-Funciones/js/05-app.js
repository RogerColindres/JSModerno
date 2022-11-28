/***argumentos y parametros***/
//parametros son los valores que puede tomar una funcion al momento de declararla
//argumentos los valores que se envian a la funacion al momento de llamarla
function sumar(a, b) { //a y b son parametros
    console.log(a + b);
}

sumar(4, 6); //4 y 6 argumentos

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar("Roger", "Colindres");