/***Destructurin de objetos anidados***/
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },

        fabricacion: {
            pais: "China",
            codigo: "201"
        }
    }
}

const { nombre, informacion: { medidas, medidas: { peso } } } = producto;
const { pais } = producto.informacion.fabricacion;
const { informacion: { fabricacion: { codigo } } } = producto;
console.log(pais);
console.log(codigo);
console.log(nombre);
console.log(medidas);
console.log(peso);