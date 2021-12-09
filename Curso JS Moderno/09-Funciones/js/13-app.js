//Añadir funciones a un objeto
const reproductor = {
    cancion: '',
    reproducir: (id) => {
        console.log(`Reproduciendo Cancion con ID: ${id}`)
    },
    pausar: () => {
        console.log(`Pausando...`)
    },
    borrar: () => {
        console.log(`Borrando Cacion...`)
    },
    crearlista: (nombre) => {
        console.log(`Creando nueva lista de reproduccion ${nombre}`)
    },
    reprudicrLista: (nombre) => {
        console.log(`Reproducuiendo lista: ${nombre}`)
    },
    set nuevaCacion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },

    get obtenerCacion() {
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCacion = 'Enter Sandman';
reproductor.obtenerCacion;


reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearlista("Clasicos");
reproductor.reprudicrLista("Clasicos");