/***Funciones flecha (Arrow functions)***/
const aprendiendo = function () {
    console.log("APrendiendo JS")
}

const aprendiendo2 = () => console.log("APrendiendo JS");

aprendiendo();
aprendiendo2();

const reproductor = {
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
    reproducirLista: (nombre) => {
        console.log(`Reproducuiendo lista: ${nombre}`)
    }

}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearlista("Clasicos");
reproductor.reproducirLista("Clasicos");
console.log(typeof reproductor.reproducir);