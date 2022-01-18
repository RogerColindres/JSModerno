//Event bubbling
/* es un método de propagación de eventos en el DOM cuando,
un evento está en un elemento dentro de otro elemento y 
ambos elementos han registrado un identificador para ese evento.*/
//evitando propagacion de eventos con el metodo stopPropagation()
const cardDIV = document.querySelector('.card')
const infoDIV = document.querySelector('.info')
const tituloDIV = document.querySelector('.titulo')

cardDIV.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('click en card')
})
infoDIV.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('click en info')
})
tituloDIV.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('click en titulo')
})