//Event bubbling
/* es un método de propagación de eventos en el DOM cuando,
un evento está en un elemento dentro de otro elemento y 
ambos elementos han registrado un identificador para ese evento.*/
//evitando propagacion de eventos con delegation
//una delegacion seria una serie de if con condiciones por cada elemento para evitar la propagacion de eventos o event bubbling
const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('titulo')) {
        console.log('diste click en el titulo')
    } else if (e.target.classList.contains('precio')) {
        console.log('diste click en el precio')
    } else if (e.target.classList.contains('card')) {
        console.log('diste click en card')
    } else {
        console.log('diste click en concierto')
    }
})