class Alumno {
    //Constructor
    constructor (nombre, primerApellido, segundoApellido, edad) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
    }

    //Funcion para guardar alumno
    static guardarAlumno(alumno) {
        localStorage.setItem("alumno", JSON.stringify(alumno));
    }

    //Función para cargar el alumnos del localStorage
    static  cargarAlumno() {
        var alumno = localStorage.getItem("alumno");
        if(alumno) {
            return JSON.parse(alumno);
        }else{
            return null;
        }
    }
 

    //Mostrar el nombre
    mostrarNombre(){
        return this.nombre + " " + this.primerApellido + " " + this.segundoApellido;
    }
}

document.addEventListener( 'DOMContentLoaded', function () {
    const registro =  document.getElementById("formularioRegistro")
    // Agregar un event listener al formulario de registro
    registro?.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var nombre = document.getElementById("name").value;
        var primerApellido = document.getElementById("apellidoPaterno").value;
        var segundoApellido = document.getElementById("apellidoMaterno").value;
        var edad = document.getElementById("edad").value;

        // Crear un nuevo objeto Alumno
        const alumno = new Alumno(nombre, primerApellido, segundoApellido, edad);

        // Guardar el alumno en localStorage
        Alumno.guardarAlumno(alumno);

        //Mostrar el nombre
        //document.getElementById("fullName").textContent = alumno.mostrarNombre();

        // Agregar el nombre del alumno a la lista y mostrar
        var lista = document.getElementById("listaAlumnos");
        var nuevoAlumno = document.createElement("li");
        nuevoAlumno.textContent = alumno.mostrarNombre();
        lista.appendChild(nuevoAlumno);

        //Mensaje de confirmacion
        alert( `Se ha registrado correctamente como ${nombre}` );

        //Limpiar los campos del formulario
        document.getElementById("formularioRegistro").reset();
    });
    
    // Cargar el alumno desde localStorage
    var alumno = Alumno.cargarAlumno();

    // Si se cargó un alumno, mostrar sus datos
    if (alumno) {
        document.getElementById("name").value = alumno.nombre;
        document.getElementById("apellidoPaterno").value = alumno.primerApellido;
        document.getElementById("apellidoMaterno").value = alumno.segundoApellido;
        document.getElementById("edad").value = alumno.edad;
        //document.getElementById("fullName").textContent = alumno.mostrarNombre();
    }
})