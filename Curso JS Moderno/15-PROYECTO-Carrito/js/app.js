/***Variables***/
//Primeros pasos

//seleccionando carrito
const carrito = document.querySelector('#carrito');

//seleccionando la lista de cursos
const listaCursos = document.querySelector('#lista-cursos');

//selecionamos donde se van a ubicar los cursos a carrito
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

//seleccionamos el boton vaciar carrito
const vaciarCarrito = document.querySelector('#vaciar-carrito');

//carrito de compras
let articulosCarrito = [];


cargarEventListener();
function cargarEventListener() {
    //cuando se agrega un curso cuando 
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina Cursos del Carrito
    carrito.addEventListener('click', eliminarCurso)

    //vaciar el carrito
    vaciarCarrito.addEventListener('click', function () {
        articulosCarrito = [];
        limpiarHTML();
        // console.log(articulosCarrito);
    })
}

//funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const seleccinarCurso = e.target.parentElement.parentElement;
        // console.log(seleccinarCurso)
        leerDatosCurso(seleccinarCurso)
    }
}
//Eliminar Curso
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(function (curso) {

            return curso.id !== cursoId;
        })
        // console.log(articulosCarrito)
        carritoHTML();
    }
}


//leer el contenido (datos) del html al que dimos click y extrae la informacion del curso

function leerDatosCurso(curso) {
    // console.log(curso)

    //creando objeto con el contenido actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        //con getAttribute podemos obtener los atributos de un elemento HTML
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some((curso) => {
        return curso.id === infoCurso.id
    });

    if (existe) {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(function (curso) {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna objeto actualizado
            } else {
                return curso; //retorna objetos no duplicados
            }
        })
        articulosCarrito = [...cursos];
    } else {
        //agregamos curso al carrito
        //agregando elementos al arreglo de articulosCarrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    // console.log(articulosCarrito);
    carritoHTML();
}

//muestra el carrito de compras en el html (el contenido del arreglo en HTML)
function carritoHTML() {

    //limpiando el html
    limpiarHTML();

    //recorriendo el carrito y creando el html
    articulosCarrito.forEach(function (curso) {

        //se puede aplicar destructuring para dejar de usar la nomeclatura de punto
        //ejemplo de nomeclatura de punto curso.imagen

        const fila = document.createElement('tr');
        //usando templateStrings para agregar elementos HTML
        //en este caso creando la celda con el contenido e insertandola a la fila de la tabla
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100"/>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        //una forma alternativa de agregar celdas (elementos) a la fila de la tabla
        // const celda = document.createElement('td')
        // celda.textContent = curso.titulo;
        // fila.appendChild(celda);
        //agrega el html del carrito en el body de la tabla (tbody)
        contenedorCarrito.appendChild(fila)

    })
}

//Limpiando el HTML
//Eliminando los tr agregados anteriormente en el TD
//Eliminando los cursos del tbody
function limpiarHTML() {
    //forma lenta de eliminar html
    //contenedorCarrito.innerHTML = " ";

    //limpiar de forma mas rapida el HMTL previo
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}