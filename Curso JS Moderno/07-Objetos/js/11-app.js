/***This en objetos***/
//This se utiliza para apuntar a las variables dentro de un entorno local
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`Producto: ${this.nombre} precio: ${this.precio}`)
    }
}

producto.mostrarInfo();