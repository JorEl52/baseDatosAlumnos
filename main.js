class Alumno {
    //Constructor
    constructor (nombre, primerApellido, segundoApellido, edad) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
        this.id = Alumno.contador++;
    }

    ////------Métodos---------------///
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
        return  this.id + '.- ' + this.primerApellido + " " + this.segundoApellido + " " + this.nombre;
    }

    static contador = 1;

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
    
})