/***como se comunican las funaciones***/
function iniciarApp() {
    console.log('iniciando app');
    segundaFuncion();
}

function segundaFuncion() {
    console.log("desde la segunda funcion");
    usuarioAutenticado("Jose")
}

iniciarApp();

function usuarioAutenticado(ususario) {
    console.log(`Autenticando usuario...`)
    console.log(`Autenticado Correctamente, bienvenido ${ususario}`)
}