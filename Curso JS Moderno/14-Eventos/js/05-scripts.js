//eventos que suceden con el scroll (movimiento en la web)
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //encontrar la ubicacion del elemento
    if (ubicacion.top < 100) {
        console.log('El elemento esta visible');
    } else {
        console.log('Todavia no esta visible');
    }
})