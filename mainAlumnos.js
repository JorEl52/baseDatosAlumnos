

function mostrarAlumnos() {
    var tablaAlumnos = document.getElementById('tablaAlumnos')
    var cuerpoTabla = tablaAlumnos.getElementsByTagName('tbody')[0]

    //Crear las filas y celdas para cada alumno agregado
    for (var index = 1; index <= localStorage.length; index++) {
        var alumno = JSON.parse(localStorage.getItem(`alumno${index}`))
        var fila = document.createElement('tr')
        var nombreCompleto = document.createElement('td')
        var edad = document.createElement('td')

        nombreCompleto.textContent = `${alumno.primerApellido} ${alumno.segundoApellido} ${alumno.nombre}`;
        edad.textContent = alumno.edad

        fila.appendChild(nombreCompleto)
        fila.appendChild(edad)
        cuerpoTabla.appendChild(fila) 
    }
   
}

document.addEventListener( 'DOMContentLoaded', () => { 
    mostrarAlumnos();
} );


function obtenerAlumnos() {
    var alumnosInscritos = []
    for(var index=1;index <= localStorage.length;index++) {
        var alumno = JSON.parse(localStorage.getItem(`alumno${index}`))
        alumnosInscritos.push(alumno)
    }
    return alumnosInscritos
}

let alumnoInscrito = obtenerAlumnos();
//console.log(alumnoInscrito);

function buscarAlumnoBinario(alumnoInscrito,nombre,primerApellido,segundoApellido) {
    var inicio = 0
    var fin = alumnoInscrito.length - 1

    while(inicio <= fin) {
        var medio = Math.floor((inicio + fin)/2)
        var alumnoActual = alumnoInscrito[medio]

        if(nombre === alumnoActual.nombre && primerApellido === alumnoActual.primerApellido && segundoApellido === alumnoActual.segundoApellido) {
            console.log("El nombre esta en la posicion " + alumnoActual);
            return alumnoActual
        }

        if (nombre < alumnoActual.nombre) {
            fin = medio - 1
        } else {
            if (primerApellido < alumnoActual.primerApellido) {
                fin = medio - 1
            } else {
                if (segundoApellido < alumnoActual.segundoApellido) {
                    fin = medio - 1
                } else {
                    inicio = medio + 1
                }
            }
        }
    }
    return null
}

const busqueda = document.getElementById("formularioBusqueda")
busqueda?.addEventListener("submit", function(event){
    event.preventDefault()
    var nombre = document.getElementById('nombreBusq').value
    var primerApellido = document.getElementById( 'apellidoPaterno' ).value
    var segundoApellido = document.getElementById('apellidoMaterno').value
    var alumnoEncontrado = buscarAlumnoBinario(alumnoInscrito,nombre,primerApellido,segundoApellido)
    
    if (alumnoEncontrado) {
        alert(`Alumno encontrado: ${alumnoEncontrado.primerApellido} ${alumnoEncontrado.segundoApellido} ${alumnoEncontrado.nombre}`)
    } else {
        alert (`Alumno no encontrado`)
    }
})
    

