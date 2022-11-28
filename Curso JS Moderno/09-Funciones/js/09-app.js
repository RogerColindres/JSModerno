/***Añadir funciones a un objeto***/
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion con ID: ${id}`)
    },
    pausar: function () {
        console.log(`Pausando...`)
    },
    borrar: function () {
        console.log(`Borrando Cacion...`)
    },
    crearlista: function (nombre) {
        console.log(`Creando nueva lista de reproduccion ${nombre}`)
    },
    reproducirLista: function (nombre) {
        console.log(`Reproducuiendo lista: ${nombre}`)
    }

}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearlista("Clasicos");
reproductor.reproducirLista("Clasicos");