
function mostrarAlumnos(alumnos) {
    let tablaAlumnos = document.getElementById('tablaAlumnos');
    let cuerpoTabla = tablaAlumnos.getElementsByTagName('tbody')[0];

    //limpiamos el contenido de la tabla
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }


    //Crear las filas y celdas para cada alumnos agregado
    alumnos.forEach(alumno => {
        let fila = document.createElement('tr');
        let nombreCompleto = document.createElement('td');
        let edad = document.createElement('td');

        nombreCompleto.textContent = `${alumno.primerApellido} ${alumno.segundoApellido} ${alumno.nombre}`;
        edad.textContent = alumno.edad

        fila.appendChild(nombreCompleto);
        fila.appendChild(edad);
        cuerpoTabla.appendChild(fila);
    });
   
}

function cargarAlumnosDesdeLocalStorage() {
    const alumnos = JSON.parse(localStorage.getItem("alumnos"));
    if (alumnos) {
        mostrarAlumnos(alumnos);
    }
}

//=============================Pestaña Alumnos=======================/////
const Alumnos = document.getElementById('pestanaAlumnos')

Alumnos?.addEventListener('click', function(event){
    event.preventDefault()

    // Al dar click en la pestaña Alumnos, obtener los alumnos almacenados en el local storage y enviarlos a la página de alumnos
    const alumnos = JSON.parse(localStorage.getItem("alumnos"));
    mostrarAlumnos(alumnos);
    window.location.href="alumnos.html"
})

//=============================Pestaña Grupos=======================/////
const Grupos = document.getElementById('pestanaGrupos')

Grupos?.addEventListener('click',function(event){
    event.preventDefault()
    //Al dar click en la pestaña grupos te dirige a otra página
    window.location.href = "grupos.html"
})

//==========================Volver a Inicio==============================///
const inicio = document.getElementById('pestanaInicio')

inicio?.addEventListener('click',function(event){
    event.preventDefault()

    //Al dar click en la pestaña inicio se recarga la pagina si esta en la pestaña principal
    //si no lo está, simplemente se hace una redirección a la misma página
    window.location.href = "index.html";
})

// Cargar los alumnos almacenados en el local storage al cargar la página
window.addEventListener("load", cargarAlumnosDesdeLocalStorage);

