/***Mas metodos para objetos***/
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`Producto: ${this.nombre} precio: ${this.precio}`)
    }
}

//keys retorna un arreglo con el nombre de las llaves de un objeto
console.log(Object.keys(producto));

//values retorna un arreglo con los valores de las llaves de un objeto
console.log(Object.values(producto));

//retorna un arreglo con arreglos que contienen la llave y el valor de un objeto
console.log(Object.entries(producto));
