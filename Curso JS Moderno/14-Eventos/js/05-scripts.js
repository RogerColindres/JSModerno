//eventos que suceden con el scroll (movimiento en la web)
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    //El método Element.getBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
    const ubicacion = premium.getBoundingClientRect(); //encontrar la ubicacion del elemento
    console.log(ubicacion)
    if (ubicacion.top < 784) {
        console.log('El elemento esta visible');
    } else {
        console.log('Todavia no esta visible');
    }
})