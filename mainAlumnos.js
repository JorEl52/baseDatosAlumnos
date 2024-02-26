

function mostrarAlumnos() {
    var tablaAlumnos = document.getElementById('tablaAlumnos')
    var cuerpoTabla = tablaAlumnos.getElementsByTagName('tbody')[0]

    //limpiamos el contenido de la tabla
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }


    //Crear las filas y celdas para cada alumnos agregado
    for (var index = 1; index <= localStorage.length; index++) {
        var alumno = JSON.parse(localStorage.getItem(`alumno${index}`))
        var fila = document.createElement('tr')
        var nombreCompleto = document.createElement('td');
        var edad = document.createElement('td')

        nombreCompleto.textContent = `${alumno.primerApellido} ${alumno.segundoApellido} ${alumno.nombre}`;
        edad.textContent = alumno.edad

        fila.appendChild(nombreCompleto)
        fila.appendChild(edad)
        cuerpoTabla.appendChild(fila) //Prueba-borrar si es necesario
    }
   
}

document.addEventListener( 'DOMContentLoaded', () => { 
    mostrarAlumnos();
} );


/*
// Función para inscribir alumnos a una materia específica
function inscribirAlumno(alumno, materia) {
    alumno.materias.push(materia);
    guardarAlumnos();
}

// Función para asignar calificaciones a un alumno
function asignarCalificacion(alumno, materia, calificacion) {
    let indiceMateria = alumno.materias.findIndex(m => m.nombre === materia);
    if (indiceMateria !== -1) {
        alumno.materias[indiceMateria].calificaciones.push(calificacion);
        guardarAlumnos();
    } else {
        console.log('El alumno no está inscrito en la materia');
    }
}

// Guardar la lista de alumnos en el LocalStorage
function guardarAlumnos() {
    let alumnos = obtenerAlumnos();
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

*/ 

/*
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
})*/