/***Funciones expresion y declaracion***/
//Declaracion de funcion (funtion declaration) 
sumar();
function sumar() {
    console.log(2 + 2);
}


//Expresion de funciones (funtion espression)
sumar2();
const sumar2 = function () {
    console.log(3 + 3);
}


//diferencias entre declaracion y expresion
//sintaxis
//js se ejecuta en dos vueltas HOISTING
//prmera etapa de creacion y registro
//segunda etapa de ejecucion