/***Obejto constructor***/

//objeto literal
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`Producto: ${this.nombre} precio: ${this.precio}`)
    }
}

//objeto constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Celular", 500);
console.log(producto2);