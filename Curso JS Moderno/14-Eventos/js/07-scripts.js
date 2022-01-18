//Event bubbling
/* es un método de propagación de eventos en el DOM cuando,
un evento está en un elemento dentro de otro elemento y 
ambos elementos han registrado un identificador para ese evento.*/
//evitando propagacion de eventos con delegation
const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', function(e) {
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    } else if (e.target.classList.contains('info')) {
        console.log('Diste click en info');
    } else if (e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
})